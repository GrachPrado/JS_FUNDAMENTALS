const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptimeMinutes = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  const responseContent = `
    <html>
    <head>
      <title>System Information</title>
    </head>
    <body>
      <h1>System Information</h1>
      <p><strong>Current user name:</strong> ${username}</p>
      <p><strong>OS type:</strong> ${osType}</p>
      <p><strong>System work time:</strong> ${uptimeMinutes}</p>
      <p><strong>Current work directory:</strong> ${currentDir}</p>
      <p><strong>Server File Name:</strong> ${serverFileName}</p>
    </body>
    </html>
  `;

  res.end(responseContent);
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
