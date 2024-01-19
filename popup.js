document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('toggleButton').addEventListener('click',function(){
    toggleRandomScroll();
  });
})

function toggleRandomScroll() {
  chrome.storage.local.get("isRandomScrolling", (result) => {
    const isRandomScrolling = result.isRandomScrolling ?? false;
    console.log("Current isRandomScrolling status:", isRandomScrolling);

    newStatus = !result.isRandomScrolling
    chrome.storage.local.set({ isRandomScrolling: newStatus }, () => {
      console.log("New isRandomScrolling status:", newStatus);
    });
  });
}
