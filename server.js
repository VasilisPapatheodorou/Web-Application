const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const uuidv4 = require('uuid').v4;

const app = express();

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, '/')));

// Define a route to render the home page at the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Sending index.html as the response
});

app.get('/category',(req,res) => {
    res.sendFile(path.join(__dirname, 'category.html'))
})

app.get('/subcategory',(req,res) => {
  res.sendFile(path.join(__dirname, 'subcategory.html'))
})

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Dummy authentication logic (replace with your actual authentication logic)
  if (username === 'demo' && password === 'demo') {
    const sessionId = uuidv4();
    res.json({ username,sessionId });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});


// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});