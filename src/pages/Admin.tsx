import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Lock, User, Eye, EyeOff } from "lucide-react";

const ADMIN_CREDENTIALS = {
  username: "Admin12",
  password: "BluePrimeAcces148415",
};

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 bg-white/90 backdrop-blur-xl border-0 shadow-2xl">
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

        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            🎉 Connexion réussie !
          </h2>
          <p className="text-slate-600 mb-6">
            Bienvenue dans l'interface d'administration BluePrime.
          </p>
          <p className="text-blue-600 font-medium">
            Interface de gestion des vidéos en cours de développement...
          </p>
        </Card>
      </div>
    </div>
  );
}
