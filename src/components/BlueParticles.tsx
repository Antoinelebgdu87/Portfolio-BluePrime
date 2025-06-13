import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  color: string;
}

export function BlueParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const colors = [
        "rgba(59, 130, 246, 0.6)",
        "rgba(96, 165, 250, 0.4)",
        "rgba(147, 197, 253, 0.3)",
        "rgba(191, 219, 254, 0.5)",
        "rgba(219, 234, 254, 0.2)",
      ];

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          delay: Math.random() * 20,
          duration: Math.random() * 20 + 15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          animate={{
            y: [-20, -100, -20],
            x: [-10, 10, -10],
            scale: [1, 1.5, 1],
            opacity: [
              particle.opacity,
              particle.opacity * 0.3,
              particle.opacity,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating hexagons */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-blue-300/20 rounded-3xl transform rotate-45" />
      </motion.div>

      <motion.div
        className="absolute top-3/4 right-1/4 w-24 h-24"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full border-2 border-blue-400/30 rounded-2xl" />
      </motion.div>

      {/* Floating triangles */}
      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-300/25" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-10 w-20 h-20"
        animate={{
          y: [20, -20, 20],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-0 h-0 border-l-10 border-r-10 border-b-20 border-l-transparent border-r-transparent border-b-blue-400/20" />
      </motion.div>
    </div>
  );
}

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Diagonal light beams */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: `linear-gradient(45deg, 
            transparent 0%, 
            rgba(59, 130, 246, 0.1) 25%, 
            transparent 50%, 
            rgba(96, 165, 250, 0.1) 75%, 
            transparent 100%)`,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Radial light pulses */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: `radial-gradient(circle, 
            rgba(59, 130, 246, 0.3) 0%, 
            rgba(96, 165, 250, 0.2) 30%, 
            rgba(147, 197, 253, 0.1) 60%, 
            transparent 100%)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full"
        style={{
          background: `radial-gradient(circle, 
            rgba(147, 197, 253, 0.4) 0%, 
            rgba(191, 219, 254, 0.2) 50%, 
            transparent 100%)`,
        }}
        animate={{
          scale: [1.2, 0.8, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function OrbitingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large orbit */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-2 left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-blue-400/60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Medium orbit */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-1.5 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-blue-300/70"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Small orbit */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute -top-1 left-1/2 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-500/80"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </div>
  );
}
