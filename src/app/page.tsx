'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center cyber-border p-8 rounded-lg"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 cyber-glitch cyber-text">
            Andrew Bielous
          </h1>
          <h2 className="text-3xl md:text-4xl text-[#00f3ff] mb-8 cyber-text">
            Full Stack Developer
          </h2>
          <p className="text-xl text-[#ff00ff] max-w-2xl mx-auto cyber-text">
            Passionate about creating innovative web solutions with modern technologies
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto cyber-border p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 cyber-text">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a full-stack developer with expertise in modern web technologies.
            My experience spans across frontend and backend development, with a
            strong focus on creating scalable and maintainable applications.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto cyber-border p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 cyber-text">Experience</h2>
          <div className="space-y-8">
            {/* Add your experience items here */}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto cyber-border p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 cyber-text">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Add your skills here */}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto cyber-border p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 cyber-text">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add your projects here */}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center cyber-border p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-8 cyber-text">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="cyber-button inline-block"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </Layout>
  );
} 