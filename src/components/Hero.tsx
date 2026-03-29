import { motion } from 'motion/react';
import { basics, achievements } from '../data/resume';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const topImpact = achievements.slice(0, 3);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              {basics.name.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                {basics.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-light text-white/60 mb-8">
              {basics.title}
            </h2>

            <p className="text-lg text-white/40 max-w-xl mb-10 leading-relaxed">
              {basics.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2 group"
              >
                View Experience
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                Download Resume
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-6">
              <a href={basics.linkedin} target="_blank" className="text-white/40 hover:text-orange-500 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${basics.email}`} className="text-white/40 hover:text-orange-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-orange-500/20 blur-[120px] rounded-full" />
            <div className="relative z-10 grid grid-cols-1 gap-6">
              {topImpact.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                >
                  <div className="text-orange-500 font-mono text-sm mb-2 uppercase tracking-widest">{achievement.type}</div>
                  <div className="text-xl font-medium text-white/90">{achievement.context}</div>
                  <div className="text-sm text-white/40 mt-2">{achievement.item}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
