import { useState, useEffect } from "react";

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  stats: string;
  channelName?: string;
  dateAdded: string;
}

// Videos par défaut - exactement les mêmes que dans Admin.tsx
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

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    // Charger les vidéos au démarrage
    const savedVideos = loadVideos();
    setVideos(savedVideos);

    // Écouter les changements de localStorage (mises à jour depuis l'admin)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          const updatedVideos = JSON.parse(e.newValue);
          setVideos(updatedVideos);
        } catch (error) {
          console.error("Erreur lors de la mise à jour des vidéos:", error);
        }
      }
    };

    // Écouter aussi les événements personnalisés (même onglet)
    const handleCustomStorageChange = () => {
      const savedVideos = loadVideos();
      setVideos(savedVideos);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("storage", handleCustomStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("storage", handleCustomStorageChange);
    };
  }, []);

  // Grouper les vidéos par chaîne
  const getVideosByChannel = () => {
    const channels: { [key: string]: Video[] } = {};

    videos.forEach((video) => {
      const channelName = video.channelName || "Autres projets";
      if (!channels[channelName]) {
        channels[channelName] = [];
      }
      channels[channelName].push(video);
    });

    return channels;
  };

  return {
    videos,
    getVideosByChannel,
  };
}
