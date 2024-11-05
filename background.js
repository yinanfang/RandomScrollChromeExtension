// Send message for action every 1 seconds with jitter.
setInterval(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTab = tabs[0];
    if (currentTab) {
      // Use chrome.tabs.sendMessage to trigger content script
      chrome.tabs.sendMessage(currentTab.id, { action: "scroll" });
    }
  });
}, 1 * 1000 + Math.floor(Math.random() * 1 * 1000));
