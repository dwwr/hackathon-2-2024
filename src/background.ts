console.log('background script')

// background.js

chrome.action.onClicked.addListener((tab) => {
  console.log('litensingsgs')
  chrome.scripting.executeScript({
    target: { tabId: tab.id! },
    files: ['content_script.js'],
  })
})

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'notification') {
    chrome.notifications.create('', data.options)
  }
})