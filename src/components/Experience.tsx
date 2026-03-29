import { motion } from 'motion/react';
import { experience } from '../data/resume';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-white/40 max-w-md">Building scalable data solutions for global enterprises.</p>
        </div>
        <div className="text-orange-500 font-mono text-sm tracking-widest">TIMELINE / 2023 - 2026</div>
      </div>

      <div className="space-y-6">
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden ${
              expanded === idx ? 'bg-white/5 border-white/20' : 'bg-transparent border-white/10 hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setExpanded(expanded === idx ? null : idx)}
              className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-orange-500 font-mono text-xs tracking-tighter">0{idx + 1}</span>
                  <h3 className="text-2xl font-semibold text-white/90">{exp.company}</h3>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {exp.location}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {exp.dates}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="hidden md:block text-right">
                  <div className="text-lg font-medium text-white/80">{exp.role}</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest mt-1">Position</div>
                </div>
                <motion.div
                  animate={{ rotate: expanded === idx ? 180 : 0 }}
                  className="p-2 rounded-full bg-white/5 border border-white/10"
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: expanded === idx ? 'auto' : 0, opacity: expanded === idx ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-8 pt-2 border-t border-white/5">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="text-sm font-mono text-white/20 uppercase tracking-widest mb-4">Responsibilities</div>
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex gap-4 text-white/60 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {exp.metrics && (
                    <div className="space-y-6">
                      <div className="text-sm font-mono text-white/20 uppercase tracking-widest">Impact Highlights</div>
                      <div className="flex flex-wrap gap-3">
                        {exp.metrics.map((metric, mIdx) => (
                          <div key={mIdx} className="px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm font-medium">
                            {metric}
                          </div>
                        ))}
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="text-xs text-white/30 uppercase mb-3">Environment</div>
                        <div className="text-sm text-white/70 italic">Azure, Databricks, PySpark, Delta Lake, ADF</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
