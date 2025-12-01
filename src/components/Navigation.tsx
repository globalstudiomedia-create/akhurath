import { useState, useRef, useEffect } from 'react';
import { Plane, ChevronDown, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Placements', id: 'placements' },
    { label: 'Contact', id: 'contact' },
  ];

  const programsDropdown = [
    { label: 'Aviation Courses', id: 'aviation' },
    { label: 'AI & Tech Courses', id: 'tech' },
    { label: 'Cybersecurity & Ethical Hacking', id: 'cyber' },
  ];

  return (
    <nav className="relative bg-blue-950 shadow-2xl">

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 rounded-lg group-hover:shadow-lg transition-all duration-300">
              <Plane className="w-6 h-6 text-blue-950" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white tracking-wider">AKHURATH</h1>
              <p className="text-xs text-amber-400 tracking-widest -mt-1">AVIATION</p>
            </div>
          </button>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-amber-400 font-semibold px-4 py-2 rounded-md transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-amber-400 font-semibold px-4 py-2 rounded-md transition-colors duration-300 flex items-center space-x-1"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in duration-200">
                  {programsDropdown.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-6 py-3 text-gray-800 hover:bg-amber-50 hover:text-amber-700 font-semibold transition-colors duration-300 border-b border-gray-100 last:border-b-0"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-amber-400 font-semibold px-4 py-2 rounded-md transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-blue-950 font-bold px-6 py-2.5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Apply Now
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-amber-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-white/10">
            {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-amber-400 font-semibold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

            <div>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-amber-400 font-semibold transition-colors duration-300 flex items-center justify-between"
              >
                <span>Programs</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <div className="bg-white/10 border-l-4 border-amber-400">
                  {programsDropdown.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-8 py-3 text-white hover:bg-white/10 hover:text-amber-400 font-semibold transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-amber-400 font-semibold transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}

            <button className="w-full mt-4 bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-blue-950 font-bold px-6 py-3 rounded-lg transition-all duration-300">
              Apply Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
