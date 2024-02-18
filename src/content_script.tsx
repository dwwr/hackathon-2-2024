if (!!window) {
  if (window.location.hostname === 'www.linkedin.com') {
    setTimeout(() => window.location.replace('https://www.olioapps.com/'), 2000)
  }
}

if (!!document) {
  document.addEventListener('keydown', function (event: any) {
    event.preventDefault()
    const e = event
    const v: string = event.target.value
    e.target.value = v + 'a'
  })
}