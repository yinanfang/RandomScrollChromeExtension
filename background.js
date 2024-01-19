// Send message for action every 3+ seconds.
setInterval(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (currentTab) {
      // Use chrome.tabs.sendMessage to trigger content script
      chrome.tabs.sendMessage(currentTab.id, { action: "scroll" });
    }
  });
}, Math.floor(Math.random() * 5 * 1000) + 5 * 1000);
