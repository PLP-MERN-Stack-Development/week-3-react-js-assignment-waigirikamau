import { useState, useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const ApiDemo = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  
  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      )
      if (!response.ok) throw new Error('Failed to fetch posts')
      const data = await response.json()
      setPosts(prev => [...prev, ...data])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchPosts()
  }, [page])
  
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const loadMore = () => {
    setPage(prev => prev + 1)
  }
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-6">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">API Demo</h1>
        
        <div className="mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {loading && page === 1 ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <div className="grid gap-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No posts found
              </div>
            ) : (
              filteredPosts.map(post => (
                <div 
                  key={post.id} 
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.body}
                  </p>
                </div>
              ))
            )}
          </div>
        )}
        
        {!loading && posts.length > 0 && (
          <div className="mt-6 text-center">
            <Button onClick={loadMore} disabled={loading}>
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}

export default ApiDemo