import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Info, Star, Calendar } from 'lucide-react';
import { Anime } from '../types/anime';

interface HeroProps {
  anime: Anime;
}

const Hero: React.FC<HeroProps> = ({ anime }) => {
  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={anime.bannerImage} 
          alt={anime.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center space-x-4">
            <span className="bg-[#FF9933] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {anime.type}
            </span>
            <div className="flex items-center text-white/80 space-x-4 text-sm">
              <span className="flex items-center"><Star size={14} className="text-[#FF9933] mr-1 fill-current" /> {anime.rating}</span>
              <span className="flex items-center"><Calendar size={14} className="mr-1" /> {anime.year}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {anime.title}
          </h1>

          <p className="text-lg text-gray-300 line-clamp-3 leading-relaxed">
            {anime.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              to={`/watch/${anime.id}/ep-1`}
              className="bg-white text-black px-8 py-3 rounded-lg font-bold flex items-center space-x-2 hover:bg-[#FF9933] hover:text-white transition-all transform hover:scale-105"
            >
              <Play size={20} fill="currentColor" />
              <span>Watch Now</span>
            </Link>
            <Link 
              to={`/anime/${anime.id}`}
              className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-lg font-bold flex items-center space-x-2 hover:bg-white/20 transition-all border border-white/10"
            >
              <Info size={20} />
              <span>More Info</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
