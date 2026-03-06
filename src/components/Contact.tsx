import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 max-w-5xl mb-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-600/20 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Let's build something <span className="text-gradient">extraordinary.</span></h2>
            <p className="text-white/60 mb-12 text-lg">
              I am eager to connect with professionals, mentors, and experts. If you are interested in collaborating on impactful projects, my inbox is always open.
            </p>
            
            <div className="space-y-6">
              <ContactItem icon={<Mail />} title="Email" value="harshv1003@gmail.com" href="mailto:harshv1003@gmail.com" />
              <ContactItem icon={<Phone />} title="Phone" value="+91 7307157186" href="tel:+917307157186" />
              <ContactItem icon={<MapPin />} title="Location" value="Prayagraj, UP, India" />
            </div>
          </div>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider pl-4">Name</label>
              <input type="text" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider pl-4">Email</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-white/50 uppercase tracking-wider pl-4">Message</label>
              <textarea rows={4} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="bg-white text-black font-semibold rounded-2xl px-8 py-4 mt-2 hover:bg-white/90 transition-colors flex items-center justify-center gap-2 group">
              Send Message
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          
        </div>
      </motion.div>
      
      <div className="mt-16 text-center text-white/40 text-sm font-mono flex flex-col items-center gap-4">
        <div className="flex gap-6">
          <a href="https://github.com/Harshv123" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/harshv1000" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://www.instagram.com/harshv1000/" className="hover:text-white transition-colors">Instagram</a>
        </div>
        <p>© 2026 Harsh Verma. Designed & Built with passion.</p>
      </div>
    </section>
  );
}

function ContactItem({ icon, title, value, href }: { icon: ReactNode, title: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-colors bg-white/5">
        {icon}
      </div>
      <div>
        <div className="text-xs text-white/40 font-mono mb-1">{title}</div>
        <div className="text-white/80 group-hover:text-white transition-colors">{value}</div>
      </div>
    </div>
  );
  
  return href ? <a href={href}>{content}</a> : content;
}
