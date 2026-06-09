import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Globe, Mail, MessageSquare, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white overflow-hidden shadow-lg transition-transform group-hover:scale-105">
                 <div className="absolute top-0 w-full h-[34%] bg-[#FF9933]"></div>
                 <div className="absolute top-[34%] w-full h-[32%] bg-white flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-[#000080]"></div>
                 </div>
                 <div className="absolute bottom-0 w-full h-[34%] bg-[#128807]"></div>
                 <Play className="relative z-10 w-4 h-4 text-[#000080] fill-current translate-x-0.5" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-black tracking-tighter">
                  <span className="text-[#FF9933]">INDI</span>
                  <span className="text-white">ANIME</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for anime streaming in India. Watch the latest episodes, movies, and trending series with multi-language support.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FF9933] transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF9933] transition-colors"><Mail size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF9933] transition-colors"><Send size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#FF9933] transition-colors"><MessageSquare size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/browse?type=Series" className="text-gray-400 hover:text-white transition-colors">Series</Link></li>
              <li><Link to="/browse?type=Movie" className="text-gray-400 hover:text-white transition-colors">Movies</Link></li>
              <li><Link to="/browse?trending=true" className="text-gray-400 hover:text-white transition-colors">Trending</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">DMCA</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF9933] text-white"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#FF9933] hover:text-white transition-colors">
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray-500">Subscribe for weekly release updates.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2024 Indianime. All rights reserved. Built for anime fans.
          </p>
          <div className="flex items-center space-x-6 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <span>Powered by Lulustream</span>
            <span className="text-[#FF9933]">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
