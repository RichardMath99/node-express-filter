const express = require('express');
const data = require('./src/data/data');
  
// Initialize App
const app = express();
  
// Assign route
app.use('/', (req, res, next) => {
  const filters = req.query;
  const filteredUsers = data.filter(item => {
    for (key in filters) {
      user = item[key] == filters[key];
    }
    return user;
  });
  res.send(filteredUsers);
});
  
// Start server on PORT 3333
app.listen(3333, () => {
  console.log('Server started!');
});