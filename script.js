import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold mb-4">Saish Satish Bawake</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Student at Dr. D. Y. Patil Institute of Engineering Management and Research, Akurdi, Pune | Artificial Intelligence
        </p>
      </motion.header>

      {/* Profile Image */}
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex justify-center mb-10"
      >
        <img 
          src="/your-photo.jpg" 
          alt="Saish Satish Bawake" 
          className="w-40 h-40 rounded-full border-4 border-gray-300 shadow-md object-cover"
        />
      </motion.div>

      {/* Resume and Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <Button variant="outline">
            <a href="/Saish-Resume.pdf" download>Download Resume</a>
          </Button>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }} 
          className="p-6 bg-white rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Project 1: [Project Title]</li>
            <li>Project 2: [Project Title]</li>
            <li>Project 3: [Project Title]</li>
          </ul>
        </motion.div>
      </div>

      {/* Contact Section */}
      <footer className="text-center mt-10">
        <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
}
