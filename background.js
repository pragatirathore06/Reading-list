chrome.runtime.onInstalled.addListener(() => {
  console.log("📦 ReadingList AI Extension Installed");
});

chrome.action.onClicked.addListener(async (tab) => {
  console.log("🔘 Extension clicked");

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });

    chrome.tabs.sendMessage(tab.id, { action: "summarize_page" });
  } catch (err) {
    console.error("❌ Injection failed:", err);
  }
});
