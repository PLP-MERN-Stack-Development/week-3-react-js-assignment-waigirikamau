import { useTheme } from './ThemeContext';

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My App</h1>
      <div className="flex items-center space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/tasks" className="hover:underline">Tasks</a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 bg-white text-black rounded transition duration-300"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
}