chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scroll") {
    scrollRandomly()
  }
});

function scrollRandomly() {
  chrome.storage.local.get("isRandomScrolling", (result) => {
    // console.log("Current isRandomScrolling status:", result.isRandomScrolling);
    if (result.isRandomScrolling) {
      const scrollDirection = Math.random() < 0.5 ? "up" : "down";
      // const windowHeight = window.innerHeight;
      let targetHeight = document.body.scrollHeight

      target = document.getElementsByClassName("content")[0]
      if (target) {
        targetHeight = target.scrollHeight
        const scrollAmount = Math.floor(0.2 * targetHeight + Math.random() * 0.1 * targetHeight);
        target.scrollBy({
          top: scrollDirection === "up" ? -scrollAmount : scrollAmount,
          behavior: "smooth"
        });
        console.log("Scrolling randomly: direction ", scrollDirection, " - amount ",scrollAmount);
      }

      // window.scrollBy({
      //   top: scrollDirection === "up" ? -scrollAmount : scrollAmount,
      //   behavior: "smooth"
      // });

    }
  });
}
