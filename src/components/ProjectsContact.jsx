import { motion } from 'framer-motion';
import { Github, ExternalLink, Mail, Linkedin } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    desc: 'A polished component library with motion-first patterns and glassmorphism aesthetics.',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive 3D experience powered by Spline and React Three Fiber.',
    img: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'High-performance analytics with streaming data and elegant visualizations.',
    img: 'https://images.unsplash.com/photo-1551281044-8b89aac3c6a6?q=80&w=1200&auto=format&fit=crop',
    github: 'https://github.com',
    demo: '#',
  },
];

export default function ProjectsContact() {
  return (
    <section id="projects" className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold mb-10"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <motion.a
            href={p.demo}
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group rounded-2xl overflow-hidden border border-zinc-200/70 dark:border-zinc-800/70 bg-white/50 dark:bg-zinc-900/50 backdrop-blur hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <div className="aspect-video overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 text-zinc-500">
                  <a href={p.github} className="hover:text-zinc-900 dark:hover:text-white" aria-label="GitHub"><Github size={18} /></a>
                  <a href={p.demo} className="hover:text-zinc-900 dark:hover:text-white" aria-label="Live demo"><ExternalLink size={18} /></a>
                </div>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <ContactSection />
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mt-20">
      <div className="grid lg:grid-cols-3 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <h3 className="text-2xl font-semibold">Let's build something memorable</h3>
          <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">
            I'm open to freelance and full-time opportunities. Drop a message or connect on social — I'll get back within a day.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const payload = Object.fromEntries(data.entries());
              alert(`Thanks, ${payload.name}! I'll be in touch at ${payload.email}.`);
              form.reset();
            }}
            className="mt-6 grid gap-3 sm:grid-cols-2"
          >
            <input name="name" required placeholder="Name" className="sm:col-span-1 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
            <input name="email" type="email" required placeholder="Email" className="sm:col-span-1 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
            <textarea name="message" rows="4" required placeholder="Message" className="sm:col-span-2 px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 focus:outline-none focus:ring-2 focus:ring-fuchsia-400" />
            <button type="submit" className="sm:col-span-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white font-medium shadow-lg hover:shadow-xl transition-shadow">Send Message</button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/50 dark:bg-zinc-900/50 backdrop-blur"
        >
          <h4 className="font-semibold">Prefer email or social?</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              <Mail size={18} /> hello@example.com
            </a>
            <a href="https://github.com" className="inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              <Github size={18} /> github.com/yourname
            </a>
            <a href="https://linkedin.com" className="inline-flex items-center gap-2 hover:translate-x-1 transition-transform">
              <Linkedin size={18} /> linkedin.com/in/yourname
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
