# Indianime - Indian Anime Streaming Platform

A modern anime streaming platform built with React, TypeScript, and Tailwind CSS, featuring Indian-centric design and multi-language support.

## 🎨 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Anime Browsing**: Browse anime by type, genre, language, and year
- **Search Functionality**: Full-text search across anime titles
- **Trending Section**: Dynamic trending anime showcase
- **Detailed Pages**: Rich anime detail pages with episode listings
- **Video Player**: Integrated video watching experience
- **Dark Theme**: Professional dark UI with accent orange (#FF9933)
- **Multi-Language Support**: Japanese, Hindi, and English subtitles

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── AnimeCard.tsx
├── pages/
│   ├── Home.tsx
│   ├── AnimeDetails.tsx
│   ├── Browse.tsx
│   └── Watch.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── anime.ts
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/henzu-mer/Indianime.git
cd Indianime

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Available Scripts

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Pages

- **Home** - Landing page with trending and latest releases
- **Browse** - Search and filter anime by multiple criteria
- **Anime Details** - Individual anime page with full information and episode list
- **Watch** - Video player for streaming episodes

## 🎨 Design System

- **Primary Color**: #FF9933 (Indian Orange)
- **Background**: #0a0a0a (Dark)
- **Accent**: #FF9933

## 📝 API & Data

Currently uses mock data for demonstration. Ready to be integrated with real anime APIs.

## 🔗 Live Demo

[Indianime on Vercel](https://indianime-ten.vercel.app)

## 📄 License

MIT License - Feel free to use this project

## 👤 Author

[henzu-mer](https://github.com/henzu-mer)

---

Made with ❤️ in India
