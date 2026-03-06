import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full py-32 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="mb-12 text-sm font-bold tracking-widest uppercase text-white/40">01. About Me</h2>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h3 className="mb-8 text-3xl font-medium leading-tight md:text-4xl lg:text-5xl font-display">
              Passionate about technology since childhood, aiming to unlock the potential of <span className="text-gradient">AI & Data</span> to address global challenges.
            </h3>
            
            <div className="space-y-6 text-lg text-white/60">
              <p>
                Hello, I am Harsh. I am currently pursuing a dual degree: a Bachelor of Science in Computer Science at the Indian Institute of Technology (IIT) Patna and a BTech in Electrical Engineering from AKTU.
              </p>
              <p>
                My academic focus spans Computer Science, Data Analytics, Data Science, and Electrical Engineering, where I am mastering programming languages, algorithms, advanced data analysis techniques, and electrical systems.
              </p>
              <p>
                I am particularly fascinated by AI, machine learning, and data visualization. I am eager to connect with professionals, mentors, and experts who share a similar vision to collaborate on impactful and lasting projects.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 md:col-span-4">
            <StatCard number="2027" label="Graduation Year" />
            <StatCard number="2" label="Degrees Pursuing" />
            <StatCard number="AI" label="Primary Focus" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="p-6 border glass rounded-2xl border-white/5">
      <div className="text-4xl font-bold text-white font-display mb-2">{number}</div>
      <div className="text-sm text-white/50 uppercase tracking-wider">{label}</div>
    </div>
  );
}
