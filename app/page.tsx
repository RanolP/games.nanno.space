import { UserButton } from "@/components/auth/user-button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                GameHub
              </h1>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/games" className="text-gray-700 hover:text-purple-600 transition">
                Browse Games
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-purple-600 transition">
                Categories
              </Link>
              <UserButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Next
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Favorite Game
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Explore our curated collection of random games. From puzzle adventures to action-packed
            challenges, find the perfect game for your mood.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/games/random"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition shadow-lg"
            >
              🎲 Random Game
            </Link>
            <Link
              href="/games"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg border border-purple-200"
            >
              Browse All Games
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Cosmic Puzzle", emoji: "🚀", color: "from-blue-400 to-blue-600" },
              { name: "Word Master", emoji: "📝", color: "from-green-400 to-green-600" },
              { name: "Number Quest", emoji: "🔢", color: "from-yellow-400 to-orange-600" },
              { name: "Memory Match", emoji: "🧠", color: "from-purple-400 to-purple-600" },
            ].map((game) => (
              <div
                key={game.name}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className={`aspect-square bg-gradient-to-br ${game.color} p-8 flex flex-col items-center justify-center text-white`}
                >
                  <div className="text-6xl mb-4">{game.emoji}</div>
                  <h4 className="text-xl font-semibold">{game.name}</h4>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Game Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Puzzle", icon: "🧩", count: 42 },
              { name: "Action", icon: "⚔️", count: 38 },
              { name: "Strategy", icon: "♟️", count: 27 },
              { name: "Word", icon: "📖", count: 31 },
              { name: "Card", icon: "🃏", count: 19 },
              { name: "Arcade", icon: "👾", count: 45 },
            ].map((category) => (
              <Link
                key={category.name}
                href={`/categories/${category.name.toLowerCase()}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="text-4xl mb-2">{category.icon}</div>
                <h4 className="font-semibold text-gray-900">{category.name}</h4>
                <p className="text-sm text-gray-500">{category.count} games</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ✨
              </div>
              <h4 className="text-xl font-semibold mb-2">Curated Collection</h4>
              <p className="text-gray-600">
                Hand-picked games from various genres to ensure quality entertainment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎮
              </div>
              <h4 className="text-xl font-semibold mb-2">Instant Play</h4>
              <p className="text-gray-600">
                No downloads required. Jump straight into the fun with our browser-based games
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🏆
              </div>
              <h4 className="text-xl font-semibold mb-2">Track Progress</h4>
              <p className="text-gray-600">
                Save your scores and achievements across all games with your account
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Start Playing?
          </h3>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of players enjoying our game collection
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
            >
              Create Free Account
            </Link>
            <Link
              href="/games"
              className="px-8 py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition shadow-lg"
            >
              Browse as Guest
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-4">GameHub</h5>
              <p className="text-sm">Your destination for random games and endless fun.</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Games</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/games" className="hover:text-white transition">All Games</Link></li>
                <li><Link href="/games/new" className="hover:text-white transition">New Releases</Link></li>
                <li><Link href="/games/popular" className="hover:text-white transition">Popular</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Community</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/leaderboard" className="hover:text-white transition">Leaderboard</Link></li>
                <li><Link href="/tournaments" className="hover:text-white transition">Tournaments</Link></li>
                <li><Link href="/forum" className="hover:text-white transition">Forum</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2024 GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}