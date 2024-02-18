if (!!window) {
  if (window.location.hostname === 'www.linkedin.com') {
    setTimeout(() => window.location.replace('https://www.olioapps.com/'), 2000)
  }
  console.log('window', window.location)
}
