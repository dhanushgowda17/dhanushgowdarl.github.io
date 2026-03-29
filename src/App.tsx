import { basics, skills, experience, achievements, projects, education, certifications } from './data/resume';
import AnimatedBackground from './components/AnimatedBackground';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-orange-500/30 overflow-x-hidden">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Splash key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
                <Achievements />
                <Experience />
                <Projects />
                <Skills />
                <Education />
              </div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
