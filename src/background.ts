chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  sendResponse({ received: true });
});
