import { motion } from 'motion/react';
import { basics } from '../data/resume';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050505]/80 backdrop-blur-xl py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold tracking-tighter mb-6">{basics.initials}</div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              Combining data engineering and ML expertise to deliver end-to-end, high-impact AI solutions.
            </p>
            <div className="flex gap-4">
              <a href={basics.linkedin} target="_blank" className="p-3 rounded-full bg-white/5 hover:bg-orange-500 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${basics.email}`} className="p-3 rounded-full bg-white/5 hover:bg-orange-500 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/20 uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-orange-500" /> {basics.email}</li>
              <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-orange-500" /> {basics.phone}</li>
              <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-orange-500" /> {basics.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-mono text-white/20 uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-orange-500 transition-colors">Home</button></li>
              <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-orange-500 transition-colors">Experience</button></li>
              <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-orange-500 transition-colors">Projects</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5 text-white/20 text-xs font-mono uppercase tracking-widest">
          <div>© 2026 {basics.name}</div>
          <div>Built with React + Framer Motion</div>
        </div>
      </div>
    </footer>
  );
}
