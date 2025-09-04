import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold mb-4"
      >
        Hi, I'm Nitish 👋
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl max-w-xl"
      >
        A passionate Computer Science & Data Science student, building full-stack apps and solving problems with AI & ML.
      </motion.p>
      <div className="flex gap-6 mt-6">
        <a href="https://github.com/PuliNitishKumar" target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 hover:text-gray-300" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-gray-300" />
        </a>
        <a href="mailto:youremail@example.com">
          <Mail className="w-6 h-6 hover:text-gray-300" />
        </a>
      </div>
    </section>
  );
}
