console.log('background script')

// background.js

chrome.action.onClicked.addListener((tab) => {
  console.log('litensingsgs')
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ['content_script.js'],
  })
})
