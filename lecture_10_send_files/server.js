// Importing express
import express from "express";
import path from 'path'; // Importing path module to handle file paths
const app = express();

// Sample product data
const product = [
    { title: 'iphone-15', price: 1000 },
    { title: 'iphone-15 pro', price: 1200 },
    { title: 'iphone-15 pro max', price: 1500 }
];

// Route to handle GET request to the root URL
// app.get('/', (req, res) => {
//     res.json({
//         message: "Welcome to the File Sending Server",
//         jo_chahe: "de sakte ho",
//         products: product,
//         success: true
//     });
// });
app.get('/', (req, res) => {
  const dir=path.resolve();
  const url = path.join(dir, '/index.html');
  res.sendFile(url)
});

// Port number
const PORT = 1000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
