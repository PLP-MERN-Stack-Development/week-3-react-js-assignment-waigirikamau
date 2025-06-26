import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* ... existing logo and nav links ... */}
        
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === 'dark' ? (
            <span className="text-yellow-400">☀️</span>
          ) : (
            <span className="text-gray-600">🌙</span>
          )}
        </button>
      </div>
    </nav>
  )
}