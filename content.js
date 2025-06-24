console.log("📥 content.js injected and running");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "summarize_page") {
    extractContent();
    sendResponse({ status: "started" });
    return true;
  }
});

function saveToLocalList(summary) {
  const username = "pragati"; // hardcoded for now
  const key = `readinglist_${username}`;
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(summary);
  localStorage.setItem(key, JSON.stringify(existing));
}

function extractContent() {
  const text = document.body?.innerText || "";
  const summary = text.slice(0, 500) + "..."; // fake summary for now

  console.log("🧠 Extracted text length:", text.length);
  console.log("📝 Summary:", summary);

  saveToLocalList({
    url: window.location.href,
    title: document.title,
    summary,
    timestamp: new Date().toISOString()
  });
}
