import { ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center w-full min-h-screen pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#7B2FFF]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#00F5FF]/20 rounded-full blur-[120px]" />
      </div>

      <div className="z-10 flex flex-col items-center text-center mt-10">
        <ProfilePicture />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full glass text-white/80 border-white/10"
        >
          Available for Opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl font-bold tracking-tighter md:text-8xl lg:text-9xl font-display"
        >
          HARSH <br className="md:hidden" />
          <span className="text-gradient">VERMA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mt-6 text-lg md:text-xl text-white/60"
        >
          Pre-final year @IIT Patna'27 | Intern @Vlabs IIT Kanpur <br />
          Data Science Enthusiast & Web Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-4 mt-10"
        >
          <a href="#projects" className="px-8 py-4 text-sm font-semibold text-black transition-transform bg-white rounded-full hover:scale-105">
            View Work
          </a>
          <a href="#contact" className="px-8 py-4 text-sm font-semibold transition-transform border rounded-full glass border-white/20 hover:bg-white/10 hover:scale-105">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex items-center gap-6 mt-16"
        >
          <SocialLink href="https://github.com/Harshv123" icon={<Github size={20} />} />
          <SocialLink href="https://www.linkedin.com/in/harshv1000" icon={<Linkedin size={20} />} />
          <SocialLink href="mailto:harshv1003@gmail.com" icon={<Mail size={20} />} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProfilePicture() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
    color: i % 3 === 0 ? '#00F5FF' : i % 3 === 1 ? '#7B2FFF' : '#2E8BFF'
  }));

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center" style={{ perspective: "1000px" }}>
      
      {/* Floating Particles Field */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full z-0 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            backgroundColor: p.color,
            boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full group cursor-pointer z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* 6. Background Gradient Glow */}
        <div 
          className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-[#00F5FF]/20 via-[#7B2FFF]/20 to-[#2E8BFF]/20 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50 group-hover:opacity-100" 
          style={{ transform: "translateZ(-50px)" }} 
        />

        {/* 4. Rotating Tech Rings (Slow Speed) */}
        <div 
          className="absolute inset-[-15px] rounded-full border border-[#00F5FF]/30 border-dashed animate-[spin_20s_linear_infinite]" 
          style={{ transform: "translateZ(-20px)" }} 
        />
        <div 
          className="absolute inset-[-30px] rounded-full border border-[#7B2FFF]/30 border-dotted animate-[spin_30s_linear_infinite_reverse]" 
          style={{ transform: "translateZ(-30px)" }} 
        />

        {/* 3. Neon Gradient Rim Glow */}
        <div 
          className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#00F5FF] via-[#7B2FFF] to-[#2E8BFF] opacity-40 group-hover:opacity-80 transition-opacity duration-500 blur-[2px]" 
          style={{ transform: "translateZ(-10px)" }} 
        />

        {/* 1. Portrait & Glassmorphism Container */}
        <div 
          className="absolute inset-0 rounded-full bg-[#050510]/60 backdrop-blur-md border border-white/10 overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.3)] transition-all duration-500" 
          style={{ transform: "translateZ(0px)" }}
        >
          
          {/* 2. Inner Glow */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(123,47,255,0.4)] z-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

          {/* 5. Holographic Scan Animation */}
          <motion.div
            className="absolute left-0 right-0 h-[2px] bg-[#00F5FF] shadow-[0_0_15px_#00F5FF,0_0_30px_#00F5FF] z-30 opacity-60"
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />

          {/* Portrait Image */}
          <img 
            src="/profile.jpg" 
            alt="Harsh Verma"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter contrast-110 saturate-120 brightness-90 group-hover:brightness-110"
          />

          {/* 3D Light Reflection */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none"
            style={{
              backgroundPosition: useTransform(mouseXSpring, [-0.5, 0.5], ["200% 200%", "-100% -100%"]),
              backgroundSize: "200% 200%"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 transition-colors border rounded-full glass border-white/10 hover:bg-white/20 hover:text-white text-white/60"
    >
      {icon}
    </a>
  );
}
