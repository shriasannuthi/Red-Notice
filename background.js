let color = '#ff6961';

chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.set({color});
    console.log("Default background set to %cred",`color:${color}`);
});