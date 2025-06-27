import { useEffect, useState, useRef, useCallback } from 'react';

export default function ApiDemo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`)
      .then(res => res.json())
      .then(data => {
        if (data.length === 0) {
          setHasMore(false);
        } else {
          setPosts(prev => [...prev, ...data]);
        }
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load posts');
        setLoading(false);
      });
  }, [page]);

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const lastPostRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prev => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">API Demo</h2>

      <img
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
        alt="Team working on API"
        className="rounded-xl shadow mb-8 w-full object-cover"
      />

      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 mb-6 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
      />

      {error && <p className="text-center text-red-500">{error}</p>}

      <ul className="space-y-4">
        {filteredPosts.map((post, index) => {
          const isLast = index === filteredPosts.length - 1;
          return (
            <li
              key={post.id}
              ref={isLast ? lastPostRef : null}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
            </li>
          );
        })}
      </ul>

      {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
    </div>
  );
}