import { motion } from "framer-motion";
import { AnimatedSection, AnimatedText } from "../components/AnimatedSection";
import {
  BlueParticles,
  GeometricShapes,
  LightBeams,
  OrbitingElements,
} from "../components/BlueParticles";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Play,
  Palette,
  Image,
  ArrowRight,
  Star,
  Award,
  Users,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Play,
      title: "Monteur Vidéo",
      description:
        "Montage professionnel et storytelling captivant pour vos contenus vidéo",
      features: [
        "Montage créatif",
        "Color grading",
        "Sound design",
        "Transitions fluides",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "Motion Design",
      description:
        "Animations et graphismes en mouvement pour donner vie à vos idées",
      features: ["Logo animation", "Explainer videos", "Effets visuels"],
      color: "from-blue-400 to-blue-500",
    },
  ];

  const portfolioItems = [
    {
      title: "Campagne Publicitaire Tech",
      category: "Motion Design",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Animation complète pour une startup technologique",
    },
    {
      title: "Série Documentaire",
      category: "Montage Vidéo",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
      description: "Montage de 8 épisodes avec narration immersive",
    },
    {
      title: "Collection YouTube Gaming",
      category: "Minia",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      description: "Plus de 50 miniatures optimisées pour le gaming",
    },
    {
      title: "Brand Identity Animation",
      category: "Motion Design",
      image:
        "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop",
      description: "Logo animé et système d'identité visuelle",
    },
    {
      title: "Podcast Série Complète",
      category: "Montage Vidéo",
      image:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=600&h=400&fit=crop",
      description: "Montage audio-vidéo pour format podcast",
    },
    {
      title: "Thumbnails E-commerce",
      category: "Minia",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Miniatures produits avec +40% de CTR",
    },
  ];

  const stats = [
    { icon: Award, value: "200+", label: "Projets Réalisés" },
    { icon: Users, value: "50+", label: "Clients Satisfaits" },
    { icon: Star, value: "4.9/5", label: "Note Moyenne" },
    { icon: Clock, value: "2ans", label: "D'Expérience" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 glass-effect"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              BluePrime
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["Accueil", "Services", "Mes projets", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Multiple layered backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 opacity-95"></div>

        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(96, 165, 250, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(147, 197, 253, 0.2) 0%, transparent 70%)
            `,
          }}
          animate={{
            backgroundPosition: [
              "20% 30%, 80% 70%, 50% 50%",
              "30% 40%, 70% 60%, 60% 40%",
              "20% 30%, 80% 70%, 50% 50%",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Spectacular visual effects */}
        <BlueParticles />
        <GeometricShapes />
        <LightBeams />
        <OrbitingElements />

        {/* Enhanced floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-24 h-24 rounded-full"
          style={{
            background:
              "linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(96, 165, 250, 0.1))",
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
          }}
          animate={{
            y: [0, -40, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-40 right-20 w-40 h-40 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(147, 197, 253, 0.2), rgba(191, 219, 254, 0.1))",
            boxShadow: "0 0 50px rgba(147, 197, 253, 0.3)",
          }}
          animate={{
            y: [0, 30, 0],
            rotate: [360, 180, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-20 h-20 rounded-full"
          style={{
            background:
              "linear-gradient(225deg, rgba(96, 165, 250, 0.4), rgba(59, 130, 246, 0.2))",
            boxShadow: "0 0 40px rgba(96, 165, 250, 0.5)",
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional magical elements */}
        <motion.div
          className="absolute top-60 left-1/2 w-8 h-8 -translate-x-1/2"
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          }}
        >
          <Sparkles className="w-full h-full text-blue-200" />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-1/3 w-6 h-6"
          animate={{
            y: [0, -80, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2,
          }}
        >
          <Zap className="w-full h-full text-blue-300" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-6">
          <AnimatedSection direction="fade" delay={0.2}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              style={{
                textShadow:
                  "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(96, 165, 250, 0.6)",
              }}
            >
              <motion.span
                className="block"
                animate={{
                  textShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.8)",
                    "0 0 50px rgba(96, 165, 250, 1)",
                    "0 0 30px rgba(59, 130, 246, 0.8)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Blue
              </motion.span>
              <motion.span
                className="block text-blue-200"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(191, 219, 254, 0.8)",
                    "0 0 40px rgba(147, 197, 253, 1)",
                    "0 0 20px rgba(191, 219, 254, 0.8)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                Prime
              </motion.span>
            </motion.h1>
          </AnimatedSection>

          <AnimatedText
            text="Créateur Visuel • Motion Designer • Monteur Vidéo"
            delay={1}
            className="text-xl md:text-2xl mb-8 text-blue-100 font-light"
          />

          <AnimatedSection direction="up" delay={1.5}>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-50">
              Transformez vos idées en expériences visuelles captivantes. Du
              montage vidéo professionnel aux animations motion design, je donne
              vie à vos projets avec créativité et expertise.
            </p>
          </AnimatedSection>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-blue-50/50 to-indigo-100/30" />
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(96, 165, 250, 0.15) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: [
              "10% 20%, 90% 80%",
              "20% 30%, 80% 70%",
              "10% 20%, 90% 80%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Mes Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une expertise complète pour donner vie à vos projets visuels
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction="up"
                delay={index * 0.2}
                className="h-full"
              >
                <motion.div
                  whileHover={{
                    y: -15,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group"
                >
                  <Card
                    className="p-8 h-full glass-effect hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(59, 130, 246, 0.1)",
                    }}
                  >
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(96, 165, 250, 0.05))",
                        boxShadow: "0 0 50px rgba(59, 130, 246, 0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Animated border effect */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent)",
                      }}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-slate-600"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-gradient relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                direction="up"
                delay={index * 0.1}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-white"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-blue-200" />
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mes projets Section */}
      <section
        id="mes-projets"
        className="py-24 bg-gradient-to-r from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Mes Projets
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez mes montages vidéo pour différentes chaînes YouTube
            </p>
          </AnimatedSection>

          <div className="grid gap-12">
            {/* Unblox Channel */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  Chaîne Unblox
                </h3>
                <p className="text-lg text-slate-600">
                  5K abonnés • Montage complet (sauf intro)
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/aqGsFXrHSRs?start=57"
                        title="Unblox Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-blue-100 text-blue-700">
                        Montage Vidéo
                      </Badge>
                      <p className="text-slate-600">
                        Montage gaming dynamique avec effets visuels
                      </p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/WxOcqbLx_eU"
                        title="Unblox Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-blue-100 text-blue-700">
                        Montage Vidéo
                      </Badge>
                      <p className="text-slate-600">
                        Création de contenu gaming engageant
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Nyjitag Channel */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  Chaîne Nyjitag
                </h3>
                <p className="text-lg text-slate-600">
                  2,45K abonnés • Montage complet
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dPlBegvPOx0?start=18"
                        title="Nyjitag Video 1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-green-100 text-green-700">
                        Montage Complet
                      </Badge>
                      <p className="text-slate-600">Storytelling immersif</p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/gnFiB_9JTpM"
                        title="Nyjitag Video 2"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-green-100 text-green-700">
                        Montage Complet
                      </Badge>
                      <p className="text-slate-600">Montage créatif avancé</p>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/nvFm7ET8HJI"
                        title="Nyjitag Video 3"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-green-100 text-green-700">
                        Montage Complet
                      </Badge>
                      <p className="text-slate-600">
                        Effets visuels professionnels
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* HazbinCombo Channel */}
            <AnimatedSection direction="up" delay={0.3}>
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold gradient-text mb-2">
                  Chaîne HazbinCombo
                </h3>
                <p className="text-lg text-slate-600">
                  2,20K abonnés • Montage spécialisé
                </p>
              </div>
              <div className="max-w-2xl mx-auto">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="overflow-hidden glass-effect hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/62JMPHF8_Eg?start=20"
                        title="HazbinCombo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      ></iframe>
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-purple-100 text-purple-700">
                        Animation & Effects
                      </Badge>
                      <p className="text-slate-600">
                        Montage avec animations et effets spéciaux avancés
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-800 relative overflow-hidden"
      >
        <BlueParticles />
        <LightBeams />

        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection direction="up">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Me Contacter
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Prêt à donner vie à vos projets ? Contactez-moi directement sur
              Discord pour discuter de vos besoins.
            </p>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a
                href="https://discord.com/users/joyeux123"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg relative overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 30px rgba(255, 255, 255, 0.5), 0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10 flex items-center">
                  <Users className="mr-3 h-6 w-6" />
                  Me contacter
                  <ArrowRight className="ml-3 h-6 w-6" />
                </span>
              </a>
            </motion.div>

            <div className="mt-8 text-center">
              <p className="text-blue-200 text-lg mb-2">Discord :</p>
              <p className="text-white text-xl font-semibold">joyeux123</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-gradient relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1" fill-rule="evenodd"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20zM0 20v20h20c0-11.046-8.954-20-20-20z"/%3E%3C/g%3E%3C/svg%3E\')',
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <AnimatedSection direction="up">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold gradient-text mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                BluePrime
              </motion.div>
              <p className="text-slate-400 mb-6">
                Créateur Visuel • Motion Designer • Monteur Vidéo
              </p>
              <div className="border-t border-slate-700 pt-6">
                <p className="text-slate-500 text-sm">
                  © 2025 BluePrime. Tous droits réservés.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
}
