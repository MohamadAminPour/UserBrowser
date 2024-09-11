window.addEventListener('load', () => {
    let UserBrowser = window.navigator.userAgent

    if (UserBrowser.match(/chrome/i)) {
        console.log('your browser is chrome');
    }
    else if (UserBrowser.match(/opera/i)) {
        console.log('your browser is opera');
    }
     if (UserBrowser.match(/Edge/i)) {
        console.log('your browser is Edge');
    }
    else if (UserBrowser.match(/firefox/i)) {
        console.log('your browser is firefox');
    }
  
})