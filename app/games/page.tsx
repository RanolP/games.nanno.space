"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";

const allGames = [
  { id: 1, name: "Cosmic Puzzle", category: "Puzzle", emoji: "🚀", difficulty: "Medium", players: 1523 },
  { id: 2, name: "Word Master", category: "Word", emoji: "📝", difficulty: "Easy", players: 2841 },
  { id: 3, name: "Number Quest", category: "Puzzle", emoji: "🔢", difficulty: "Hard", players: 982 },
  { id: 4, name: "Memory Match", category: "Card", emoji: "🧠", difficulty: "Easy", players: 3021 },
  { id: 5, name: "Space Invaders Redux", category: "Arcade", emoji: "👾", difficulty: "Medium", players: 1892 },
  { id: 6, name: "Chess Master", category: "Strategy", emoji: "♟️", difficulty: "Hard", players: 721 },
  { id: 7, name: "Typing Thunder", category: "Action", emoji: "⚡", difficulty: "Medium", players: 1321 },
  { id: 8, name: "Color Switch", category: "Arcade", emoji: "🎨", difficulty: "Easy", players: 4123 },
  { id: 9, name: "Logic Gates", category: "Puzzle", emoji: "🔧", difficulty: "Hard", players: 412 },
  { id: 10, name: "Word Connect", category: "Word", emoji: "🔤", difficulty: "Medium", players: 2103 },
  { id: 11, name: "Tank Battle", category: "Action", emoji: "🎯", difficulty: "Medium", players: 1672 },
  { id: 12, name: "Solitaire Pro", category: "Card", emoji: "🃏", difficulty: "Easy", players: 5821 },
];

const categories = ["All", "Puzzle", "Word", "Card", "Arcade", "Strategy", "Action"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function GamesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = allGames.filter((game) => {
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || game.difficulty === selectedDifficulty;
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GameHub
              </Link>
              <Link href="/games" className="text-purple-600 font-medium">
                Browse Games
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-purple-600 transition">
                Categories
              </Link>
            </div>
            <UserButton />
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Games</h1>
          <p className="text-purple-100">Explore our collection of {allGames.length} games</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGames.map((game) => (
            <div key={game.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-t-lg flex items-center justify-center text-6xl">
                {game.emoji}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{game.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">{game.category}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    game.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                    game.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                    "bg-red-100 text-red-700"
                  }`}>
                    {game.difficulty}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">👥 {game.players.toLocaleString()} players</span>
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition">
                    Play
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No games found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}