import React from 'react';

export default function SummaryList({ items }) {
  if (!items.length) return <p>No summaries yet. Click the icon on any article!</p>;

  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} style={{ marginBottom: "1rem" }}>
          <a href={item.url} target="_blank" rel="noreferrer">
            <strong>{item.title}</strong>
          </a>
          <p>{item.summary}</p>
          <small>{new Date(item.timestamp).toLocaleString()}</small>
        </li>
      ))}
    </ul>
  );
}
