import { motion } from 'motion/react';
import { education, certifications } from '../data/resume';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <GraduationCap className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>

          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white/90">{edu.school}</h3>
                <span className="text-orange-500 font-mono text-sm">{edu.gpa} CGPA</span>
              </div>
              <div className="text-white/60 mb-2">{edu.degree}</div>
              <div className="flex justify-between text-sm text-white/30">
                <span>{edu.location}</span>
                <span>{edu.dates}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-orange-500/10 border border-orange-500/20">
              <Award className="w-6 h-6 text-orange-500" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>

          <div className="grid gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-orange-500/50 group-hover:text-orange-500 transition-colors" />
                <span className="text-white/70 group-hover:text-white transition-colors">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
