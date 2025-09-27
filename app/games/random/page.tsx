"use client";

import { useState } from "react";
import Link from "next/link";
import { UserButton } from "@/components/auth/user-button";

const games = [
  { name: "Cosmic Puzzle", emoji: "🚀", description: "Navigate through space puzzles", color: "from-blue-500 to-purple-600" },
  { name: "Word Master", emoji: "📝", description: "Test your vocabulary skills", color: "from-green-500 to-teal-600" },
  { name: "Number Quest", emoji: "🔢", description: "Mathematical adventures await", color: "from-yellow-500 to-orange-600" },
  { name: "Memory Match", emoji: "🧠", description: "Challenge your memory", color: "from-purple-500 to-pink-600" },
  { name: "Space Invaders", emoji: "👾", description: "Classic arcade action", color: "from-indigo-500 to-purple-600" },
  { name: "Chess Master", emoji: "♟️", description: "Strategic chess battles", color: "from-gray-600 to-gray-800" },
  { name: "Color Switch", emoji: "🎨", description: "Fast-paced color matching", color: "from-pink-500 to-rose-600" },
  { name: "Logic Gates", emoji: "🔧", description: "Solve complex logic puzzles", color: "from-cyan-500 to-blue-600" },
];

export default function RandomGamePage() {
  const [currentGame, setCurrentGame] = useState(() =>
    games[Math.floor(Math.random() * games.length)]
  );
  const [isSpinning, setIsSpinning] = useState(false);

  const getRandomGame = () => {
    setIsSpinning(true);

    // Simulate spinning animation
    let count = 0;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * games.length);
      setCurrentGame(games[randomIndex]);
      count++;

      if (count > 10) {
        clearInterval(interval);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GameHub
              </Link>
              <Link href="/games" className="text-gray-700 hover:text-purple-600 transition">
                Browse Games
              </Link>
              <Link href="/games/random" className="text-purple-600 font-medium">
                Random Game
              </Link>
            </div>
            <UserButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎲 Random Game Picker
          </h1>
          <p className="text-gray-600">Let fate decide your next gaming adventure!</p>
        </div>

        {/* Game Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className={`aspect-video bg-gradient-to-br ${currentGame.color} flex items-center justify-center relative overflow-hidden`}>
            <div className={`text-8xl ${isSpinning ? 'animate-bounce' : 'animate-pulse'}`}>
              {currentGame.emoji}
            </div>
            {isSpinning && (
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          <div className="p-8">
            <h2 className="text-3xl font-bold mb-3">{currentGame.name}</h2>
            <p className="text-gray-600 mb-6">{currentGame.description}</p>

            <div className="flex gap-4">
              <button
                className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
              >
                Play Now
              </button>
              <button
                onClick={getRandomGame}
                disabled={isSpinning}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSpinning ? "Spinning..." : "Try Another"}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-4">
          <button
            onClick={getRandomGame}
            disabled={isSpinning}
            className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition border border-gray-100 disabled:opacity-50"
          >
            <div className="text-3xl mb-2">🎰</div>
            <p className="font-semibold">Spin Again</p>
          </button>

          <Link href="/games" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition border border-gray-100">
            <div className="text-3xl mb-2">🎮</div>
            <p className="font-semibold">Browse All</p>
          </Link>

          <Link href="/dashboard" className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition border border-gray-100">
            <div className="text-3xl mb-2">⭐</div>
            <p className="font-semibold">My Favorites</p>
          </Link>
        </div>
      </div>
    </div>
  );
}