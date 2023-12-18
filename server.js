const express = require('express');
const path = require('path');

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


// Start the server and listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});