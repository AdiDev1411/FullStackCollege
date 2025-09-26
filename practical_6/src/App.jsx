import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [editText, setEditText] = useState('');

  // Add a new task
  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input.trim(), done: false }]);
      setInput('');
    }
  };

  // Remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Start editing a task
  const startEdit = (index) => {
    setEditIdx(index);
    setEditText(tasks[index].text);
  };

  // Save edited task
  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = editText.trim() || updatedTasks[index].text;
    setTasks(updatedTasks);
    setEditIdx(null);
    setEditText('');
  };

  // Toggle done
  const toggleDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center">
      <div className="bg-[#18181b] p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100 tracking-wide">Get Things Done!</h2>
        <div className="flex mb-8">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 px-4 py-2 rounded-l-lg bg-gray-900 text-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-gray-400"
            placeholder="What is the task today?"
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <button
            onClick={addTask}
            className="bg-purple-500 text-white px-5 py-2 rounded-r-lg hover:bg-purple-400 font-semibold transition"
          >
            Add Task
          </button>
        </div>
        <ul>
          {tasks.length === 0 && (
            <li className="text-gray-500 text-center">No tasks yet.</li>
          )}
          {tasks.map((task, idx) => (
            <li
              key={idx}
              className={`flex items-center justify-between bg-gray-900 px-4 py-3 my-3 rounded-xl shadow transition ${
                task.done ? 'opacity-60 line-through' : ''
              }`}
            >
              <div className="flex items-center gap-3 flex-1">
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleDone(idx)}
                  className="accent-purple-500 w-5 h-5"
                />
                {editIdx === idx ? (
                  <input
                    type="text"
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                    className="px-2 py-1 rounded bg-gray-800 text-gray-100 border-none focus:outline-none flex-1"
                    onKeyDown={e => e.key === 'Enter' && saveEdit(idx)}
                  />
                ) : (
                  <span className="text-lg text-gray-100">{task.text}</span>
                )}
              </div>
              <div className="flex gap-2">
                {editIdx === idx ? (
                  <button
                    onClick={() => saveEdit(idx)}
                    className="text-white bg-green-600 px-2 py-1 rounded hover:bg-green-500 transition"
                    title="Save"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path stroke="white" strokeWidth="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(idx)}
                    className="text-white bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-400 transition"
                    title="Edit"
                  >
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                      <path stroke="white" strokeWidth="2" d="M4 20h4l10.5-10.5a1.5 1.5 0 0 0-2.12-2.12L6 17.88V20z"/>
                    </svg>
                  </button>
                )}
                <button
                  onClick={() => removeTask(idx)}
                  className="text-white bg-red-600 px-2 py-1 rounded hover:bg-red-500 transition"
                  title="Delete"
                >
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path stroke="white" strokeWidth="2" d="M6 6l12 12M6 18L18 6"/>
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;