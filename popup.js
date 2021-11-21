let changeContent = document.getElementById("changeContent");

chrome.storage.sync.get("color", ({ color }) => {
    changeContent.style.backgroundColor = color;
});


changeContent.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageBackgroundColor,
    });
});

function setPageBackgroundColor() {
    var text = document.getElementById("content-text");
    var str = text.innerHTML,
        reg = /fuck|bitch|fucking|asshole/ig; //g is to replace all occurances

    var toStr = String(reg);
    var color = (toStr.replace('\/g', '|')).substring(1);

    var colors = color.split("|");

    if (colors.indexOf("fuck") > -1) {
        str = str.replace(/fuck/g, '<span style="color:red;">censored</span>');
    }



    document.getElementById("content_text").innerHTML = str;
}