const webSocketsServerPort = process.env.PORT || 8000;
const path = require('path');
const express = require('express');
const server = express()
server.use(express.static(path.join(__dirname, 'trebek_client/build')));
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/trebek_client/build/index.html'));
});
server.listen(webSocketsServerPort);
console.log('server sparked')

