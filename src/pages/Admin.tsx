import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Save,
  X,
  Edit,
} from "lucide-react";

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
  channelName?: string;
  dateAdded: string;
}

// Videos par défaut
const defaultVideos: Video[] = [
  {
    id: "default-1",
    title: "Chaîne Unblox - Vidéo 1",
    description: "Montage gaming dynamique avec effets visuels",
    url: "https://www.youtube.com/embed/aqGsFXrHSRs?start=57",
    category: "Montage Vidéo",
    stats: "5K abonnés",
    channelName: "Unblox",
    dateAdded: "2024-01-01",
  },
  {
    id: "default-2",
    title: "Chaîne Unblox - Vidéo 2",
    description: "Création de contenu gaming engageant",
    url: "https://www.youtube.com/embed/WxOcqbLx_eU",
    category: "Montage Vidéo",
    stats: "5K abonnés",
    channelName: "Unblox",
    dateAdded: "2024-01-01",
  },
  {
    id: "default-3",
    title: "Chaîne Nyjitag - Vidéo 1",
    description: "Storytelling immersif",
    url: "https://www.youtube.com/embed/dPlBegvPOx0?start=18",
    category: "Montage Complet",
    stats: "2,45K abonnés",
    channelName: "Nyjitag",
    dateAdded: "2024-01-01",
  },
  {
    id: "default-4",
    title: "Chaîne Nyjitag - Vidéo 2",
    description: "Montage créatif avancé",
    url: "https://www.youtube.com/embed/gnFiB_9JTpM",
    category: "Montage Complet",
    stats: "2,45K abonnés",
    channelName: "Nyjitag",
    dateAdded: "2024-01-01",
  },
  {
    id: "default-5",
    title: "Chaîne Nyjitag - Vidéo 3",
    description: "Effets visuels professionnels",
    url: "https://www.youtube.com/embed/nvFm7ET8HJI",
    category: "Montage Complet",
    stats: "2,45K abonnés",
    channelName: "Nyjitag",
    dateAdded: "2024-01-01",
  },
  {
    id: "default-6",
    title: "Chaîne HazbinCombo",
    description: "Montage avec animations et effets spéciaux avancés",
    url: "https://www.youtube.com/embed/62JMPHF8_Eg?start=20",
    category: "Animation & Effects",
    stats: "2,20K abonnés",
    channelName: "HazbinCombo",
    dateAdded: "2024-01-01",
  },
];

// Utilitaires pour le localStorage
const STORAGE_KEY = "blueprime_videos";

const loadVideos = (): Video[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error("Erreur lors du chargement des vidéos:", error);
  }
  return defaultVideos;
};

const saveVideos = (videos: Video[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
    // Déclencher un événement pour notifier les autres onglets
    window.dispatchEvent(
      new StorageEvent("storage", {
        key: STORAGE_KEY,
        newValue: JSON.stringify(videos),
      }),
    );
  } catch (error) {
    console.error("Erreur lors de la sauvegarde:", error);
  }
};

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    url: "",
    category: "Montage Vidéo",
    stats: "",
    channelName: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedVideos = loadVideos();
    setVideos(savedVideos);
  }, []);

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

  const convertYouTubeURL = (url: string) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      const timeParam = url.includes("t=")
        ? `?start=${url.split("t=")[1].split("&")[0].replace("s", "")}`
        : "";
      return `https://www.youtube.com/embed/${videoId}${timeParam}`;
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
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
      url: convertYouTubeURL(newVideo.url),
      dateAdded: new Date().toISOString().split("T")[0],
    };

    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    saveVideos(updatedVideos);

    setNewVideo({
      title: "",
      description: "",
      url: "",
      category: "Montage Vidéo",
      stats: "",
      channelName: "",
    });
    setShowAddForm(false);
    setError("");
    setSuccessMessage("Vidéo ajoutée avec succès !");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleEditVideo = (video: Video) => {
    setEditingVideo(video);
    setNewVideo({
      title: video.title,
      description: video.description,
      url: video.url,
      category: video.category,
      stats: video.stats,
      channelName: video.channelName || "",
    });
  };

  const handleUpdateVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVideo || !newVideo.title || !newVideo.url) {
      setError("Titre et URL sont requis");
      return;
    }

    const updatedVideo: Video = {
      ...editingVideo,
      ...newVideo,
      url: convertYouTubeURL(newVideo.url),
    };

    const updatedVideos = videos.map((v) =>
      v.id === editingVideo.id ? updatedVideo : v,
    );
    setVideos(updatedVideos);
    saveVideos(updatedVideos);

    setEditingVideo(null);
    setNewVideo({
      title: "",
      description: "",
      url: "",
      category: "Montage Vidéo",
      stats: "",
      channelName: "",
    });
    setError("");
    setSuccessMessage("Vidéo mise à jour avec succès !");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteVideo = (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette vidéo ?")) {
      const updatedVideos = videos.filter((video) => video.id !== id);
      setVideos(updatedVideos);
      saveVideos(updatedVideos);
      setSuccessMessage("Vidéo supprimée avec succès !");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const cancelEdit = () => {
    setEditingVideo(null);
    setNewVideo({
      title: "",
      description: "",
      url: "",
      category: "Montage Vidéo",
      stats: "",
      channelName: "",
    });
    setError("");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 relative overflow-hidden flex items-center justify-center">
        <BlueParticles />
        <LightBeams />

        <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-xl border-0 shadow-2xl relative z-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
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
                  placeholder="Admin12"
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
                  placeholder="BluePrimeAcces148415"
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
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-lg"
            >
              Se connecter
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Panel Admin BluePrime
            </h1>
            <p className="text-slate-600">Gestion des vidéos - Mes Projets</p>
          </div>
          <div className="flex gap-4">
            <a
              href="/"
              className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Retour au site
            </a>
            <Button
              onClick={() => setIsAuthenticated(false)}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Déconnexion
            </Button>
          </div>
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
          {/* Add/Edit Video Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                {editingVideo ? "Modifier la vidéo" : "Ajouter une vidéo"}
              </h2>
              {!editingVideo && (
                <Button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Nouvelle vidéo
                </Button>
              )}
            </div>

            {(showAddForm || editingVideo) && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                onSubmit={editingVideo ? handleUpdateVideo : handleAddVideo}
                className="space-y-4 border-t pt-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Titre de la vidéo *
                    </label>
                    <input
                      type="text"
                      value={newVideo.title}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, title: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Ma nouvelle création"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nom de la chaîne
                    </label>
                    <input
                      type="text"
                      value={newVideo.channelName}
                      onChange={(e) =>
                        setNewVideo({
                          ...newVideo,
                          channelName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Nom de la chaîne YouTube"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    URL YouTube *
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
                  <p className="text-xs text-slate-500 mt-1">
                    Formats acceptés: youtube.com/watch, youtu.be/
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newVideo.description}
                    onChange={(e) =>
                      setNewVideo({ ...newVideo, description: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Description de votre projet"
                    rows={3}
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
                      Statistiques
                    </label>
                    <input
                      type="text"
                      value={newVideo.stats}
                      onChange={(e) =>
                        setNewVideo({ ...newVideo, stats: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="10K vues, 5K abonnés..."
                    />
                  </div>
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="bg-green-600 text-white hover:bg-green-700"
                  >
                    {editingVideo ? (
                      <>
                        <Save className="h-5 w-5 mr-2" />
                        Sauvegarder
                      </>
                    ) : (
                      <>
                        <Upload className="h-5 w-5 mr-2" />
                        Ajouter la vidéo
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={
                      editingVideo ? cancelEdit : () => setShowAddForm(false)
                    }
                  >
                    <X className="h-5 w-5 mr-2" />
                    Annuler
                  </Button>
                </div>
              </motion.form>
            )}
          </Card>

          {/* Videos List */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Mes vidéos ({videos.length})
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
                      src={video.url}
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
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditVideo(video)}
                          className="border-blue-300 text-blue-600 hover:bg-blue-50"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteVideo(video.id)}
                          className="border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1 text-sm">
                      {video.title}
                    </h3>
                    {video.channelName && (
                      <p className="text-xs text-blue-600 font-medium mb-1">
                        {video.channelName}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 mb-2">
                      {video.description}
                    </p>
                    {video.stats && (
                      <p className="text-xs text-green-600 font-medium">
                        {video.stats}
                      </p>
                    )}
                    <p className="text-xs text-slate-400 mt-2">
                      Ajouté le {video.dateAdded}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {videos.length === 0 && (
              <div className="text-center py-12">
                <Video className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">
                  Aucune vidéo
                </h3>
                <p className="text-slate-500">
                  Ajoutez votre première vidéo pour commencer
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
