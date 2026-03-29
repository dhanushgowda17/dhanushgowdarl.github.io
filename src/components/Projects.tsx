import { motion } from 'motion/react';
import { projects } from '../data/resume';
import { Database, Cpu, Layers, ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
        <div className="h-[1px] flex-1 bg-white/10" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-orange-500/20 transition-all duration-500"
          >
            <div className="relative h-full p-8 rounded-[22px] bg-[#0a0a0a] overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database className="w-48 h-48" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                    <Layers className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex gap-4">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/40">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-sm text-white/50 leading-relaxed flex gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
