// Require express
const express = require("express");

// Create app object
const app = express();

// Main page route
app.get("/", function (req, res) {
  res.send(`
    <h1>Welcome to my first Node.js website!</h1>
    <ul>
      <li><a href="/contact">Contact Information</a></li>
      <li><a href="/bio">Bio</a></li>
    </ul>
  `);
});

// Contact page route
app.get("/contact", function (req, res) {
  res.send(`
    <h3>Contact Information</h3>
    <p>My name is gnaneshwar podila, and I can be reached at gnaneshwarpodila.com.</p>
  `);
});

// Bio page route
app.get("/bio", function (req, res) {
  res.send(`
    <h1>Bio</h1>
    <p>Hello! I'm gnaneshwar podila, a software developer passionate about cybser security & web development and learning new technologies.</p>
  `);
});

// Start the server on port 8002
//If the code runs on Heroku, assign a dynamic port number
let port = process.env.PORT;

//If it runs locally assign 8002 static port
if (port == null || port == "") {
  port = 8003;
}
app.listen(port);

