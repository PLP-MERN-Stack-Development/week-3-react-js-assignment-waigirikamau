const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
        <p>© {new Date().getFullYear()} React App. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Terms</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer