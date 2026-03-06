import { motion } from 'motion/react';

const education = [
  {
    school: "Indian Institute of Technology, Patna",
    degree: "BS Computer Science & Data Analytics",
    date: "July 2023 - July 2027",
    details: "Focus on advanced data analytics, machine learning, and core computer science principles."
  },
  {
    school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    degree: "Bachelor of Technology - BTech, Electrical Engineering",
    date: "2023 - 2027",
    details: "Studying electrical systems, circuits, and integration of hardware with software."
  },
  {
    school: "Vishnu Bhagwan Public School & College",
    degree: "High School & Intermediate",
    date: "Completed",
    details: "Awarded NTSE (National Talent Search Examination) scholarship."
  }
];

export default function Education() {
  return (
    <section id="education" className="w-full py-32 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-16 text-sm font-bold tracking-widest uppercase text-white/40">04. Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 border glass rounded-3xl border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col h-full"
            >
              <div className="text-xs font-mono text-white/40 mb-4">{edu.date}</div>
              <h3 className="text-xl font-medium text-white font-display mb-2">{edu.school}</h3>
              <div className="text-sm text-purple-400 mb-4">{edu.degree}</div>
              <p className="text-white/50 text-sm mt-auto">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
