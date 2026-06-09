import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Play } from 'lucide-react';
import { Anime } from '../types/anime';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <Link 
      to={`/anime/${anime.id}`}
      className="group relative bg-[#1a1a1a] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
    >
      <div className="aspect-[2/3] relative">
        <img 
          src={anime.coverImage} 
          alt={anime.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-[#FF9933] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
            <Play className="text-white fill-current ml-1" size={24} />
          </div>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded flex items-center space-x-1 border border-white/10">
          <Star size={12} className="text-[#FF9933] fill-current" />
          <span className="text-xs font-bold text-white">{anime.rating}</span>
        </div>

        {/* Year/Type Badge */}
        <div className="absolute bottom-2 left-2 flex flex-col space-y-1">
          <span className="bg-[#FF9933] text-white text-[10px] px-1.5 py-0.5 rounded font-bold uppercase w-fit">
            {anime.type}
          </span>
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-1.5 py-0.5 rounded font-bold w-fit">
            {anime.year}
          </span>
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white line-clamp-1 group-hover:text-[#FF9933] transition-colors">
          {anime.title}
        </h3>
        <p className="text-[10px] text-gray-400 mt-1">
          {anime.genres.slice(0, 2).join(' • ')}
        </p>
      </div>
    </Link>
  );
};

export default AnimeCard;
