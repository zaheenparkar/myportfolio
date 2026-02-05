import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-md py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
            className="font-display text-xl font-bold text-primary-light hover:text-indigo-accent transition-colors"
          >
            ZP
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-3 py-2 font-mono text-sm transition-colors uppercase tracking-wide ${
                  activeSection === link.href.slice(1)
                    ? 'text-indigo-accent'
                    : 'text-slate-light hover:text-primary-light'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/Zaheen_Parkar_Resume.pdf"
              download
              className="ml-4 btn-primary text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-primary-light hover:text-indigo-accent transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[99] bg-navy-900/98 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`font-display text-2xl font-semibold transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-indigo-accent'
                  : 'text-primary-light hover:text-indigo-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="/Zaheen_Parkar_Resume.pdf"
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary mt-6 flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
}
