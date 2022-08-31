chrome.tabs.onUpdated.addListener((tabID,tab) => {
    console.log(tab.url);
})