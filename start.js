function olfunc() {
  let newWindow = window.open('about:blank');
  let customHtml = `
  <!DOCTYPE html>
  <html>
  <body>
  hi
  </body>
  </html>
  `

  if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
    popup_failed();
    return;
  }
  
  newWindow.document.open();
  newWindow.document.write(customHtml);
  newWindow.document.close();
  
  return;
}

function popup_failed() {
  alert("If you're seeing this, you need to set popups to be allowed by default. Visit chrome://settings/content/popups and select \"Sites can send pop-ups and use redirects\", then refresh this page."
  return;
}
