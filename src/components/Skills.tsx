import { motion } from 'motion/react';
import { skills } from '../data/resume';

export default function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="grid lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Technical Arsenal</h2>
          <p className="text-white/40 leading-relaxed">
            Specialized in distributed computing, cloud data architecture, and operationalizing AI workflows.
          </p>
          
          <div className="mt-12 p-8 rounded-3xl bg-orange-500/5 border border-orange-500/10">
            <div className="text-orange-500 font-mono text-xs uppercase tracking-widest mb-4">Core Focus</div>
            <div className="text-xl text-white/80 font-medium">Azure Data Lakehouse & AI/ML Engineering</div>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h3 className="text-sm font-mono text-orange-500 uppercase tracking-widest mb-6">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
