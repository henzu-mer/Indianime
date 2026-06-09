import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ANIME_DATA } from '../data/mockData';
import { Play, Star, Calendar, Globe, Share2, Plus, LayoutGrid } from 'lucide-react';

const AnimeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const anime = ANIME_DATA.find(a => a.id === id);

  if (!anime) {
    return <div className="pt-32 text-center text-white">Anime not found</div>;
  }

  return (
    <div className="pb-20">
      {/* Backdrop */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={anime.bannerImage} 
          alt={anime.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-64 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Poster */}
          <div className="w-64 flex-shrink-0 mx-auto md:mx-0">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-[2/3]">
              <img src={anime.coverImage} alt={anime.title} className="w-full h-full object-cover" />
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link 
                to={`/watch/${anime.id}/ep-1`}
                className="w-full bg-[#FF9933] text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-[#FF9933]/90 transition-all"
              >
                <Play size={20} fill="currentColor" />
                <span>Watch Ep 1</span>
              </Link>
              <button className="w-full bg-white/10 text-white py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:bg-white/20 transition-all border border-white/10">
                <Plus size={20} />
                <span>Add to List</span>
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-8 pt-4">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-white">{anime.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-[#FF9933] fill-current" />
                  <span className="text-white font-bold">{anime.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{anime.year}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Globe size={16} />
                  <span>{anime.language.join(', ')}</span>
                </div>
                <span>•</span>
                <span className="bg-[#FF9933]/10 text-[#FF9933] px-2 py-0.5 rounded border border-[#FF9933]/20 font-bold">
                  {anime.type}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {anime.genres.map(genre => (
                  <span key={genre} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-white hover:bg-white/10 transition-colors cursor-pointer">
                    {genre}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                {anime.description}
              </p>
            </div>

            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
              <button className="flex items-center space-x-2 text-gray-400 hover:text-[#FF9933] transition-colors">
                <Share2 size={20} />
                <span className="font-semibold">Share</span>
              </button>
            </div>
          </div>
        </div>

        {/* Episodes Section */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <LayoutGrid className="text-[#FF9933] mr-2" />
              Episodes
            </h2>
            <span className="text-gray-400 text-sm font-medium">{anime.episodes.length} Episodes</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {anime.episodes.map(episode => (
              <Link 
                key={episode.id}
                to={`/watch/${anime.id}/${episode.id}`}
                className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all flex h-24"
              >
                <div className="w-40 relative flex-shrink-0">
                  <img src={episode.thumbnail} alt={episode.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play size={20} className="text-white fill-current" />
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black/80 text-[10px] text-white px-1 rounded font-bold">
                    23:45
                  </div>
                </div>
                <div className="p-3 flex flex-col justify-center overflow-hidden">
                  <span className="text-[#FF9933] text-[10px] font-bold uppercase tracking-wider mb-1">Episode {episode.number}</span>
                  <h4 className="text-white text-sm font-semibold truncate group-hover:text-[#FF9933] transition-colors">
                    {episode.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
