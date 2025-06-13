import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function AnimatedSection({
  children,
  delay = 0,
  className = "",
  duration = 0.8,
  direction = "up",
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedText({
  text,
  delay = 0,
  className = "",
  staggerChildren = 0.05,
}: {
  text: string;
  delay?: number;
  className?: string;
  staggerChildren?: number;
}) {
  const words = text.split(" ");

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay,
        staggerChildren,
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
