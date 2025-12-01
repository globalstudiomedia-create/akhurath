import { Plane, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-3 rounded-lg">
                <Plane className="w-8 h-8 text-blue-950" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wider">AKHURATH</h3>
                <p className="text-xs text-amber-400 tracking-widest">AVIATION INSTITUTE</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed">
              India's premier aviation training institute, preparing students for global careers
              in aviation and emerging technologies.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                  Aviation Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                  Tech Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-amber-400 transition-colors duration-300">
                  Placements
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-blue-200">
                  123 Aviation Plaza, Airport Road,<br />New Delhi - 110037, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-blue-200">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-blue-200">admissions@akhurath.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-amber-400">Follow Us</h4>
            <p className="text-blue-200 mb-6">
              Stay connected for updates, success stories, and career opportunities.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-amber-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 text-center">
          <p className="text-blue-300">
            &copy; {new Date().getFullYear()} Akhurath Aviation Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
