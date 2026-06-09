import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Play } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/browse?search=${encodeURIComponent(searchQuery)}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-white overflow-hidden shadow-[0_0_15px_rgba(255,153,51,0.3)] group-hover:shadow-[0_0_20px_rgba(255,153,51,0.5)]">
               <div className="absolute top-0 w-full h-[34%] bg-[#FF9933]"></div>
               <div className="absolute top-[34%] w-full h-[32%] bg-white flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-[#000080]"></div>
               </div>
               <div className="absolute bottom-0 w-full h-[34%] bg-[#128807]"></div>
               <Play className="relative z-10 w-4 h-4 text-[#000080] fill-current drop-shadow-sm translate-x-0.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-black tracking-tighter">
                <span className="text-[#FF9933]">INDI</span>
                <span className="text-white">ANIME</span>
              </span>
              <span className="text-[8px] font-bold text-gray-500 tracking-[0.2em] -mt-1 uppercase">Stream Desi</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-[#FF9933] transition-colors">Home</Link>
            <Link to="/browse?type=Series" className="text-gray-300 hover:text-[#FF9933] transition-colors">Series</Link>
            <Link to="/browse?type=Movie" className="text-gray-300 hover:text-[#FF9933] transition-colors">Movies</Link>
            <Link to="/trending" className="text-gray-300 hover:text-[#FF9933] transition-colors">Trending</Link>
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden sm:flex relative">
              <input
                type="text"
                placeholder="Search anime..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-full py-1.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933] w-48 lg:w-64"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
                <Search size={16} />
              </button>
            </form>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-b border-white/10 px-4 py-6 space-y-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search anime..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
            />
            <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={18} />
            </button>
          </form>
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300">Home</Link>
            <Link to="/browse?type=Series" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300">Series</Link>
            <Link to="/browse?type=Movie" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300">Movies</Link>
            <Link to="/trending" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300">Trending</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
