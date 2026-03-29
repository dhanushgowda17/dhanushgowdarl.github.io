import { motion } from 'motion/react';
import { achievements } from '../data/resume';
import { Trophy, Zap, Target, TrendingUp } from 'lucide-react';

export default function Achievements() {
  const icons = [Trophy, Target, Zap];

  return (
    <section id="achievements" className="relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Key Achievements</h2>
        <p className="text-white/40">Measurable impact delivered across projects.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon className="w-24 h-24 text-orange-500" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 border border-orange-500/30">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                
                <div className="text-orange-500 font-mono text-xs tracking-widest uppercase mb-2">{achievement.type}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white/90">{achievement.context}</h3>
                <p className="text-white/50 leading-relaxed italic">
                  "{achievement.item}"
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
