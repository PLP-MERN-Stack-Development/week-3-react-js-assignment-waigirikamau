import { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ThemeContext } from '../contexts/ThemeContext'

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  
  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout