import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Sparkles } from 'lucide-react';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Vue.js', level: 90 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Framer Motion', level: 85 },
  { name: 'Three.js / R3F', level: 80 },
];

export default function AboutSkills() {
  return (
    <section id="about" className="py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-zinc-600 dark:text-zinc-300 leading-relaxed"
          >
            I'm a frontend engineer focused on crafting fluid, accessible, and visually rich user experiences. My toolkit blends modern frameworks with motion design and 3D to tell product stories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            <InfoCard title="UI/UX" icon={<Sparkles className="text-fuchsia-500" />} subtitle="Motion, micro‑interactions" />
            <InfoCard title="Frontend" icon={<Code2 className="text-indigo-500" />} subtitle="React, Vue, TS" />
            <InfoCard title="Architecture" icon={<Layers className="text-cyan-500" />} subtitle="Design systems" />
            <InfoCard title="Performance" icon={<Cpu className="text-emerald-500" />} subtitle="Lighthouse 95+" />
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold"
          >
            Skills
          </motion.h3>
          <div className="space-y-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <div className="flex justify-between mb-2 text-sm">
                  <span>{skill.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-400">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-200/70 dark:bg-zinc-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, subtitle, icon }) {
  return (
    <div className="p-4 rounded-xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/50 dark:bg-zinc-900/50 backdrop-blur hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <div className="flex items-center gap-3">
        <div className="shrink-0 p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10">
          {icon}
        </div>
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}
