module.exports = function() {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div class="button">
          <a href='/' id="rosterbtn"><button id="btn"> Back to Roster</button></a>
        </div>
        <div>
          <div id="error">
            <h1>
              Player not found! Click the button to return to the roster!
            </h1>
          </div>
          <div id="knickslogo">
            <img src="../knickslogo.png" id="logo">
          </div>
        </div>
      </body>
    </html>
    `
}