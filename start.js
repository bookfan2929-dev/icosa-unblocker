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

  newWindow.document.open();
  newWindow.document.write(customHtml);
  newWindow.document.close();
  document.body.innerHTML = "If you're seeing this, you need to set popups to be allowed by default. Visit <a href=\"chrome://settings/content/popups\">this</a> and select \"Sites can send pop-ups and use redirects\", then refresh this page."
  return;
}
