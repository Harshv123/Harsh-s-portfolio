import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 flex justify-center py-4 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-6'
      }`}
    >
      <nav className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${
        scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
      }`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-white/70 transition-colors rounded-full hover:text-white hover:bg-white/10"
          >
            {item.name}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
