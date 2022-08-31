console.log("This is Ashish Testing Random in content Script File");

(() => {
    chrome.runtime.onMessage.addListener((obj, sender , response) => {
        console.log("This is inside the chrome Runtime One");
        console.log(obj);
    })
})