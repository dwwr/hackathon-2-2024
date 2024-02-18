import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  console.log('send help')

  // const changeBackground = () => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //     const tab = tabs[0]
  //     console.log('tab', tabs)
  //     if (tab.id) {
  //       chrome.tabs.sendMessage(
  //         tab.id,
  //         {
  //           color: '#555555',
  //         },
  //         (msg) => {
  //           console.log('result message:', msg)
  //         }
  //       )
  //     }
  //   })
  // }

  return (
    <div>
      <div
        onClick={() => {
          console.log('jo mama')
          // changeBackground()
        }}
      >
        Hello AC
      </div>
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
