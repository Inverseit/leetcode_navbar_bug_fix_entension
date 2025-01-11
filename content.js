const targetElement = document.querySelector("#leetcode-navbar > div:nth-child(1)");

// Function to remove the 'display-none' class from the target element
function removeDisplayNone() {
  if (targetElement && targetElement.classList.contains("display-none")) {
    targetElement.classList.remove("display-none");
    console.log("Removed 'display-none' class from #leetcode-navbar > div:nth-child(1)");
  }
}

// Observe DOM mutations for React hydration and dynamic updates
const observer = new MutationObserver(() => {
  removeDisplayNone();
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial check
document.addEventListener("DOMContentLoaded", removeDisplayNone);

// Cleanup on page unload
window.addEventListener("beforeunload", () => {
  observer.disconnect();
  console.log("Observer disconnected.");
});