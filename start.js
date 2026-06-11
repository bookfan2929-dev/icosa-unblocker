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
  return;
}
