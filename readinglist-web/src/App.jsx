import { useEffect, useState } from 'react';

function App() {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    const key = "readinglist_pragati";
    const data = JSON.parse(localStorage.getItem(key) || "[]");
    setSummaries(data.reverse()); // latest first
  }, []);

  return (
    
    <div className="p-4 text-sm font-sans">
      <h1 className="text-xl font-bold mb-4">📚 Your Reading List</h1>
      {summaries.length === 0 ? (
        <p>No summaries found.</p>
      ) : (
        <ul className="space-y-3">
          {summaries.map((item, idx) => (
            <li key={idx} className="border rounded-xl p-3 bg-white shadow-sm">
              <a href={item.url} target="_blank" rel="noreferrer" className="font-semibold text-blue-700">
                {item.title}
              </a>
              <p className="text-gray-800 mt-1">{item.summary}</p>
              <p className="text-gray-500 text-xs mt-2">{new Date(item.timestamp).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
