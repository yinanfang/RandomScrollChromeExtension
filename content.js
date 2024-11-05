chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "scroll") {
    // scrollRandomly()
    scrollWindowDownForFBHomeFeedOnWeb()
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

function scrollWindowDownForFBHomeFeedOnWeb() {
  chrome.storage.local.get("isRandomScrolling", (result) => {
    // Auto close the large error dialog on first page load.
    // Get the error popup element
    const errorDialog = document.querySelector('[role="dialog"]');
    // Check if the error popup exists
    if (errorDialog) {
      // Get the close button element
      const closeButton = errorDialog.querySelector('[aria-label="Close"]');
      // Check if the close button exists
      if (closeButton) {
        // Simulate a click on the close button
        closeButton.click();
        console.log("Auto closing the error dialog");
      }
    }

    // Auto close the small error popup on the bottome left of the page
    const smallClearButton = document.querySelector('[aria-label="Clear"]');
    // Check if the button exists
    if (smallClearButton) {
      // Simulate a click on the button
      smallClearButton.click();
      console.log("Auto closing the small error popup");
    }

    // Auto retry feed pagination.
    const tryAgainButton = document.querySelector('[aria-label="Try again"]');
    // Check if the button exists
    if (tryAgainButton) {
      // Simulate a click on the button
      tryAgainButton.click();
      console.log("Auto retrying feed pagination");
    }

    // console.log("Current isRandomScrolling status:", result.isRandomScrolling);
    const currentPageUrl = window.location.href;
      if (!currentPageUrl.includes("my-od")) {
        return;
      }
    // console.log("Current isRandomScrolling status:", result.isRandomScrolling);
    if (result.isRandomScrolling) {
      // Scroll to the very bottom of the page.
      const targetHeight = document.body.scrollHeight
      const scrollAmount = targetHeight * 10
      window.scrollBy({
        top: targetHeight,
        behavior: "smooth"
      });
      console.log("Scrolling down - amount ", scrollAmount);
    }
  });
}
