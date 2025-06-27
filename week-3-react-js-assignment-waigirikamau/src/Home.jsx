export default function Home() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        Welcome to the <span className="text-blue-600">React Task App</span>
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Track your daily tasks, filter by status, and enjoy a fully responsive dark/light theme.
      </p>
      <img
        src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400"
        alt="Productivity Illustration"
        className="mx-auto mb-8 rounded-xl shadow-lg w-full max-w-2xl object-cover"
      />
      <a
        href="/tasks"
        className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition"
      >
        Get Started
      </a>
    </div>
  );
}