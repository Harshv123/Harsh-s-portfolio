import { motion } from 'motion/react';

const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "HTML/CSS"] },
  { category: "Data Science & AI", items: ["Pandas", "Machine Learning", "Data Visualization", "MATLAB", "Algorithms"] },
  { category: "Web Development", items: ["React", "Node.js", "Tailwind CSS", "Express", "REST APIs"] },
  { category: "Core Engineering", items: ["Electrical Systems", "Data Analytics", "Problem Solving"] }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-32 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-sm font-bold tracking-widest uppercase text-white/40">02. Expertise</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border glass rounded-3xl border-white/5 hover:border-white/10 transition-colors"
            >
              <h3 className="mb-6 text-xl font-medium text-white font-display">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 text-sm border rounded-full bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
