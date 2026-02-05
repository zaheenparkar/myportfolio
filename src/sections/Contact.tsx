import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Linkedin, Phone, MapPin, Send, Download } from 'lucide-react';
import { toast } from 'sonner';

gsap.registerPlugin(ScrollTrigger);

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'zaheenparkar@gmail.com',
    href: 'mailto:zaheenparkar@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/zaheenparkar',
    href: 'https://linkedin.com/in/zaheenparkar',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+971 52 210 8668',
    href: 'tel:+971522108668',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dubai, UAE',
    href: '#',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section 
      ref={sectionRef} 
      id="contact"
      className="relative w-full py-20 lg:py-32 bg-primary-dark"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="reveal text-center mb-16">
          <p className="label-mono mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-light mb-6">
            Let's Build Something That Ships.
          </h2>
          <p className="text-secondary-light max-w-2xl mx-auto">
            Ready to discuss your next project? I'm always open to discussing new opportunities, 
            interesting projects, or just having a chat about technology.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact details */}
          <div className="reveal space-y-6">
            <p className="label-mono mb-4">Contact Information</p>
            
            <div className="space-y-4">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a 
                    key={detail.label}
                    href={detail.href}
                    className="flex items-center gap-4 p-4 bg-navy-800/50 card-border hover:bg-navy-800/80 hover:border-indigo-accent/40 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-sm accent-bg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-light uppercase tracking-wide mb-1">
                        {detail.label}
                      </p>
                      <p className="text-primary-light font-medium group-hover:text-indigo-accent transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Download Resume */}
            <div className="pt-4">
              <a 
                href="/Zaheen_Parkar_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full p-4 bg-navy-800/50 card-border hover:bg-navy-800/80 hover:border-indigo-accent/40 transition-all duration-300"
              >
                <Download className="w-5 h-5 text-indigo-accent" />
                <span className="text-primary-light font-medium">Download My Resume</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Experience', value: '11+ Years' },
                { label: 'Projects', value: '50+' },
                { label: 'Clients', value: '20+' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 bg-navy-800/30 card-border">
                  <p className="font-display text-lg font-bold text-indigo-accent">{stat.value}</p>
                  <p className="text-slate-light text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal">
            <p className="label-mono mb-4">Send a Message</p>
            
            <form 
              onSubmit={handleSubmit}
              className="p-6 lg:p-8 bg-navy-800/50 card-border"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs text-slate-light uppercase tracking-wide mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-[rgba(245,247,255,0.14)] text-primary-light placeholder-slate-light/50 focus:border-indigo-accent focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-mono text-xs text-slate-light uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-navy-900 border border-[rgba(245,247,255,0.14)] text-primary-light placeholder-slate-light/50 focus:border-indigo-accent focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-slate-light uppercase tracking-wide mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-navy-900 border border-[rgba(245,247,255,0.14)] text-primary-light placeholder-slate-light/50 focus:border-indigo-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-[rgba(245,247,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-primary-light">ZP</span>
              <span className="text-slate-light text-sm">·</span>
              <span className="text-slate-light text-sm">Technical Project Manager</span>
            </div>
            <p className="font-mono text-xs text-slate-light">
              © {new Date().getFullYear()} Zaheen Parkar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
