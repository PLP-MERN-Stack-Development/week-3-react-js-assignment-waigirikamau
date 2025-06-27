export default function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}