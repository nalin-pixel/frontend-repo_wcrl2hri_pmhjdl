import { useEffect, useState } from 'react';
import Navigation from './components/Navigation.jsx';
import Hero3D from './components/Hero3D.jsx';
import AboutSkills from './components/AboutSkills.jsx';
import ProjectsContact from './components/ProjectsContact.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-colors duration-500 selection:bg-fuchsia-400/30 selection:text-fuchsia-700">
      <Navigation theme={theme} setTheme={setTheme} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero3D />
        <AboutSkills />
        <ProjectsContact />
      </main>
      <footer className="mt-20 py-10 text-sm text-center text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} • Crafted with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  );
}

export default App;
