export const useGetCurrentTab = () => {
  return new Promise<chrome.tabs.Tab>((resolve, reject) => {
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
        resolve(tab);
      });
    } catch (e) {
      reject(e);
    }
  });
};
