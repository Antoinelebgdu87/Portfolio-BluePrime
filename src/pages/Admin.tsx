import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../components/AnimatedSection";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { BlueParticles, LightBeams } from "../components/BlueParticles";
import {
  Lock,
  User,
  Eye,
  EyeOff,
  Upload,
  Video,
  Trash2,
  Plus,
  Check,
} from "lucide-react";

// Simulated video storage (in real app, this would be a database)
const ADMIN_CREDENTIALS = {
  username: "Admin12",
  password: "BluePrimeAcces148415",
};

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  stats: string;
}

const initialVideos: Video[] = [
  {
    id: "1",
    title: "Chaîne Unblox - Vidéo 1",
    description: "Montage gaming dynamique avec effets visuels",
    url: "https://www.youtube.com/embed/aqGsFXrHSRs?start=57",
    category: "Montage Vidéo",
    stats: "5K abonnés",
  },
  {
    id: "2",
    title: "Chaîne Unblox - Vidéo 2",
    description: "Création de contenu gaming engageant",
    url: "https://www.youtube.com/embed/WxOcqbLx_eU",
    category: "Montage Vidéo",
    stats: "5K abonnés",
  },
  {
    id: "3",
    title: "Chaîne Nyjitag - Vidéo 1",
    description: "Storytelling immersif",
    url: "https://www.youtube.com/embed/dPlBegvPOx0?start=18",
    category: "Montage Complet",
    stats: "2,45K abonnés",
  },
  {
    id: "4",
    title: "Chaîne Nyjitag - Vidéo 2",
    description: "Montage créatif avancé",
    url: "https://www.youtube.com/embed/gnFiB_9JTpM",
    category: "Montage Complet",
    stats: "2,45K abonnés",
  },
  {
    id: "5",
    title: "Chaîne Nyjitag - Vidéo 3",
    description: "Effets visuels professionnels",
    url: "https://www.youtube.com/embed/nvFm7ET8HJI",
    category: "Montage Complet",
    stats: "2,45K abonnés",
  },
  {
    id: "6",
    title: "Chaîne HazbinCombo",
    description: "Montage avec animations et effets spéciaux avancés",
    url: "https://www.youtube.com/embed/62JMPHF8_Eg?start=20",
    category: "Animation & Effects",
    stats: "2,20K abonnés",
  },
];

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [videos, setVideos] = useState<Video[]>(initialVideos);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    url: "",
    category: "Montage Vidéo",
    stats: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      credentials.username === ADMIN_CREDENTIALS.username &&
      credentials.password === ADMIN_CREDENTIALS.password
    ) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Identifiants incorrects");
      setCredentials({ username: "", password: "" });
    }
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVideo.title || !newVideo.url) {
      setError("Titre et URL sont requis");
      return;
    }

    const video: Video = {
      id: Date.now().toString(),
      ...newVideo,
    };

    setVideos([...videos, video]);
    setNewVideo({
      title: "",
      description: "",
      url: "",
      category: "Montage Vidéo",
      stats: "",
    });
    setShowAddForm(false);
    setSuccessMessage("Vidéo ajoutée avec succès !");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteVideo = (id: string) => {
    setVideos(videos.filter((video) => video.id !== id));
    setSuccessMessage("Vidéo supprimée avec succès !");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const convertYouTubeURL = (url: string) => {
    // Convert YouTube watch URLs to embed URLs
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      const timeParam = url.includes("t=")
        ? `?start=${url.split("t=")[1].split("&")[0].replace("s", "")}`
        : "";
      return `https://www.youtube.com/embed/${videoId}${timeParam}`;
    }
    return url;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 relative overflow-hidden flex items-center justify-center">
        <BlueParticles />
        <LightBeams />

        <AnimatedSection direction="fade" className="relative z-10">
          <Card className="w-full max-w-md p-8 glass-effect border-0">
            <div className="text-center mb-8">
              <motion.div
                className="w-20 h-20 bg-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Lock className="h-10 w-10 text-white" />
              </motion.div>
              <h1 className="text-3xl font-bold gradient-text mb-2">
                Admin Panel
              </h1>
              <p className="text-slate-600">Connexion sécurisée BluePrime</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nom d'utilisateur
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        username: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Entrez votre nom d'utilisateur"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Mot de passe
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={credentials.password}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        password: e.target.value,
                      })
                    }
                    className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Entrez votre mot de passe"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-blue-gradient text-white py-3 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Se connecter
              </Button>
            </form>
          </Card>
        </AnimatedSection>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold gradient-text mb-2">
              Panel Admin BluePrime
            </h1>
            <p className="text-slate-600">Gestion des vidéos - Mes Projets</p>
          </div>
          <Button
            onClick={() => setIsAuthenticated(false)}
            variant="outline"
            className="border-red-300 text-red-600 hover:bg-red-50"
          >
            Déconnexion
          </Button>
        </div>

        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mb-6 flex items-center"
          >
            <Check className="h-5 w-5 mr-2" />
            {successMessage}
          </motion.div>
        )}

        <div className="grid gap-8">
          {/* Add Video Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Ajouter une vidéo
              </h2>
              <Button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-gradient text-white"
              >
                <Plus className="h-5 w-5 mr-2" />
                Nouvelle vidéo
              </Button>
            </div>

            {showAddForm && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={handleAddVideo}
                className="space-y-4 border-t pt-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Titre de la vidéo
                    </label>
                    <input
                      type="text"
                      value={newVideo.title}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, title: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: Ma nouvelle création"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Statistiques
                    </label>
                    <input
                      type="text"
                      value={newVideo.stats}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, stats: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Ex: 10K vues"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    URL YouTube
                  </label>
                  <input
                    type="url"
                    value={newVideo.url}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, url: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="https://www.youtube.com/watch?v=..."
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Catégorie
                    </label>
                    <select
                      value={newVideo.category}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, category: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Montage Vidéo">Montage Vidéo</option>
                      <option value="Motion Design">Motion Design</option>
                      <option value="Montage Complet">Montage Complet</option>
                      <option value="Animation & Effects">
                        Animation & Effects
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Description
                    </label>
                    <input
                      type="text"
                      value={newVideo.description}
                      onChange={(e) =>
                        setNewVideo({
                          ...newVideo,
                          description: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Description courte du projet"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    <Upload className="h-5 w-5 mr-2" />
                    Ajouter la vidéo
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAddForm(false)}
                  >
                    Annuler
                  </Button>
                </div>
              </motion.form>
            )}
          </Card>

          {/* Videos List */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Vidéos actuelles ({videos.length})
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={convertYouTubeURL(video.url)}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-blue-100 text-blue-700">
                        {video.category}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteVideo(video.id)}
                        className="border-red-300 text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">
                      {video.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">
                      {video.description}
                    </p>
                    {video.stats && (
                      <p className="text-xs text-blue-600 font-medium">
                        {video.stats}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
