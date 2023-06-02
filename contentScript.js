// contentScript.js
function applyColor(color) {
  document.body.style.backgroundColor = color;
  chrome.tabs.insertCSS({ code: `body { background-color: ${color} !important; }` });
}

document.getElementById('saveButton').addEventListener('click', function () {
  console.log("Extension Loaded !!!");
  const color = document.getElementById('colorPicker').value;
  chrome.storage.sync.set({ 'selectedColor': color }, function () {
    console.log('Color saved:', color);
    applyColor(color);
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyColor') {
    applyColor(request.color);
  }
});
