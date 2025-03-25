'use client';

import { motion } from 'framer-motion';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Andrew Bielous
          </h1>
          <h2 className="text-3xl md:text-4xl text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Experience</h2>
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Skills</h2>
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8">Projects</h2>
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
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </section>
    </Layout>
  );
} 