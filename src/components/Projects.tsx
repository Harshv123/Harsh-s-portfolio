import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "AI Data Analytics Dashboard",
    description: "A comprehensive dashboard for visualizing complex datasets using machine learning algorithms to predict trends and anomalies.",
    tech: ["Python", "Pandas", "React", "Machine Learning"],
    image: "https://picsum.photos/seed/dashboard/800/600?blur=2",
    github: "#",
    live: "#"
  },
  {
    title: "Smart Grid Monitoring",
    description: "An IoT-based system to monitor electrical grids in real-time, integrating hardware sensors with a web-based analytics platform.",
    tech: ["Electrical Eng", "IoT", "Node.js", "Data Visualization"],
    image: "https://picsum.photos/seed/grid/800/600?blur=2",
    github: "#",
    live: "#"
  },
  {
    title: "Vlabs Interactive Modules",
    description: "Educational virtual lab modules developed during my research association at IIT Kanpur to simulate complex engineering experiments.",
    tech: ["Web Development", "JavaScript", "Physics Simulation"],
    image: "https://picsum.photos/seed/lab/800/600?blur=2",
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-sm font-bold tracking-widest uppercase text-white/40">05. Featured Projects</h2>
        
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div key={index} className={`group flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center hover:scale-[1.02] transition-transform duration-500`}>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full md:w-3/5 relative rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[400px] object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 !== 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start' : 'md:items-end text-left md:text-right'}`}
              >
                <div className="text-sky-400 font-mono text-sm mb-2">Featured Project</div>
                <h3 className="text-3xl font-bold text-white font-display mb-6">{project.title}</h3>
                
                <div className={`p-6 glass rounded-2xl border border-white/5 mb-6 text-white/70 relative z-20 ${index % 2 !== 0 ? 'md:-mr-12' : 'md:-ml-12'}`}>
                  {project.description}
                </div>
                
                <div className={`flex flex-wrap gap-4 text-sm font-mono text-white/50 mb-8 ${index % 2 !== 0 ? 'justify-start' : 'md:justify-end'}`}>
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.github} className="text-white/60 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={project.live} className="text-white/60 hover:text-white transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </motion.div>
              
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
