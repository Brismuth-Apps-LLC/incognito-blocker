chrome.tabs.onCreated.addListener((tab)=>{
  if (tab.incognito) {
    chrome.tabs.remove(tab.id);
  }
});

chrome.runtime.onInstalled.addListener(details => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({ url: 'https://www.incognitoblocker.com/setup' });
  }
});
