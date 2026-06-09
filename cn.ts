import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ANIME_DATA } from '../data/mockData';
import AnimeCard from '../components/AnimeCard';
import { Filter, X, Search } from 'lucide-react';

const GENRES = ['Action', 'Adventure', 'Fantasy', 'Supernatural', 'Gore', 'Romance', 'Sci-Fi'];
const LANGUAGES = ['Japanese', 'Hindi', 'English'];
const YEARS = [2024, 2023, 2022, 2021, 2020];
const TYPES = ['Series', 'Movie'];

const Browse: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeFilters = {
    type: searchParams.get('type') || '',
    genre: searchParams.get('genre') || '',
    language: searchParams.get('language') || '',
    year: searchParams.get('year') || '',
    search: searchParams.get('search') || '',
  };

  const filteredAnime = useMemo(() => {
    return ANIME_DATA.filter(anime => {
      const matchType = !activeFilters.type || anime.type === activeFilters.type;
      const matchGenre = !activeFilters.genre || anime.genres.includes(activeFilters.genre);
      const matchLang = !activeFilters.language || anime.language.includes(activeFilters.language);
      const matchYear = !activeFilters.year || anime.year === parseInt(activeFilters.year);
      const matchSearch = !activeFilters.search || anime.title.toLowerCase().includes(activeFilters.search.toLowerCase());
      
      return matchType && matchGenre && matchLang && matchYear && matchSearch;
    });
  }, [activeFilters]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const [searchInput, setSearchInput] = useState(activeFilters.search);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilter('search', searchInput);
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <form onSubmit={handleSearchSubmit} className="relative max-w-xl">
           <input 
             type="text" 
             placeholder="What are you looking for?" 
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)}
             className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933] text-lg"
           />
           <Search size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
           <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FF9933] text-black px-4 py-1.5 rounded-lg font-bold text-sm hover:bg-[#FF9933]/90 transition-colors">
             Search
           </button>
        </form>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-black text-white">
            {activeFilters.search ? `Search results for "${activeFilters.search}"` : 'Browse Anime'}
          </h1>
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-colors border border-white/10"
          >
            <Filter size={18} />
            <span className="font-bold">Filters</span>
            {Object.values(activeFilters).filter(Boolean).length > 0 && (
              <span className="bg-[#FF9933] text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {Object.values(activeFilters).filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* Filter Bar */}
        {isFilterOpen && (
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
            {/* Type */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Type</label>
              <select 
                value={activeFilters.type}
                onChange={(e) => updateFilter('type', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              >
                <option value="">All Types</option>
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Genre */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Genre</label>
              <select 
                value={activeFilters.genre}
                onChange={(e) => updateFilter('genre', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              >
                <option value="">All Genres</option>
                {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            {/* Language */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Language</label>
              <select 
                value={activeFilters.language}
                onChange={(e) => updateFilter('language', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              >
                <option value="">All Languages</option>
                {LANGUAGES.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>

            {/* Year */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Year</label>
              <select 
                value={activeFilters.year}
                onChange={(e) => updateFilter('year', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF9933]"
              >
                <option value="">All Years</option>
                {YEARS.map(y => <option key={y} value={String(y)}>{y}</option>)}
              </select>
            </div>

            {/* Clear Button */}
            <div className="flex items-end">
              <button 
                onClick={clearFilters}
                className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 font-bold py-2 rounded-lg border border-red-500/20 transition-colors flex items-center justify-center space-x-2"
              >
                <X size={18} />
                <span>Clear</span>
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredAnime.map(anime => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No anime found matching your criteria.</p>
            <button 
              onClick={clearFilters}
              className="mt-4 text-[#FF9933] font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
