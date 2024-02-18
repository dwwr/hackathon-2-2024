import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  console.log('send help')


  function notify() {
    chrome.runtime.sendMessage('', {
      type: 'notification',
      options: {
        title: 'test',
        message: 'test',
        iconUrl: '/test.png',
        type: 'basic',
      },
    })
  }

  return (
    <div>
      <div
        onClick={() => {
          console.log('jo mama')
          notify()
        }}
      >
        notify
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
