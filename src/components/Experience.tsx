import { motion } from 'motion/react';

const experiences = [
  {
    role: "Student Research Associate",
    company: "Vlabs IIT Kanpur",
    date: "January 2026 - Present",
    location: "Kanpur, India",
    description: "Working on cutting-edge research and development in virtual labs, focusing on creating interactive and educational technical modules."
  },
  {
    role: "Web Developer Intern",
    company: "Vault-Tec Security",
    date: "September 2024 - September 2024",
    location: "Prayagraj, Uttar Pradesh, India",
    description: "Developed and maintained web applications, focusing on security features and user interface improvements."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-32 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-sm font-bold tracking-widest uppercase text-white/40">03. Experience</h2>
        
        <div className="relative border-l border-white/10 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 mb-16 last:mb-0"
            >
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-2xl font-medium text-white font-display">{exp.role}</h3>
                <span className="text-sm font-mono text-white/50 mt-1 md:mt-0">{exp.date}</span>
              </div>
              
              <div className="text-lg text-gradient font-medium mb-4">{exp.company}</div>
              <p className="text-white/60 leading-relaxed">{exp.description}</p>
              <div className="mt-3 text-sm text-white/40 flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                {exp.location}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
