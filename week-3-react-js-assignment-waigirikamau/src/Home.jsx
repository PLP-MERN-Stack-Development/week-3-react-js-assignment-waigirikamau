import Card from '../components/Card'
import Button from '../components/Button'
import { useTheme } from '../contexts/ThemeContext'

const Home = () => {
  const { theme } = useTheme()
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
          Welcome to React with Tailwind CSS
        </h1>
        <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
          This is a demo application showcasing React, JSX, and Tailwind CSS.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              Task Manager
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Manage your tasks with our interactive task manager.
            </p>
            <Button variant="primary" link to="/tasks">
              Go to Tasks
            </Button>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
              API Demo
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Explore API integration with JSONPlaceholder.
            </p>
            <Button variant="primary" link to="/api-demo">
              Go to API Demo
            </Button>
          </Card>
        </div>
        
        <div className={`p-4 rounded-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className="text-gray-600 dark:text-gray-300">
            Current theme: {theme}
          </p>
        </div>
      </Card>
    </div>
  )
}

export default Home