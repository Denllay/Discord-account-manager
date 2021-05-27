const getUserInfo = (() => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email_cache');

  chrome.storage.local.set({ token, email });
})();
