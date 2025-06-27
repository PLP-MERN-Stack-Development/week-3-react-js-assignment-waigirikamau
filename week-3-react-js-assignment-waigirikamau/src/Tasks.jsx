import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filtered = tasks.filter(t =>
    filter === 'All' ? true : filter === 'Completed' ? t.completed : !t.completed
  );

  return (
    <div className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Task Manager</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="New Task"
          className="flex-1 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >Add</button>
      </div>
      <div className="flex gap-4 justify-center mb-6">
        {['All', 'Active', 'Completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full border dark:border-gray-600 ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'}`}
          >{f}</button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {filtered.map((task, i) => (
            <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center">
              <div>
                <p className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>{task.text}</p>
                <small className="text-xs text-gray-500">{task.completed ? 'Completed' : 'Pending'}</small>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleTask(i)} className="px-3 py-1 bg-yellow-400 text-black rounded hover:bg-yellow-500">Toggle</button>
                <button onClick={() => deleteTask(i)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
