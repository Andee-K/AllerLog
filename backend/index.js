const express = require('express');
const cors = require('cors');
const PORT = 5001;
const registerRouter = require('./routes/register')
const express = require('express')
const mongoose = require('mongoose')
const db = mongoose.connection
const app = express()

// Database setup
mongoose.connect(process.env.DATABASE_URL,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
mongoose.set('strictQuery', true)
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Middleware
app.use(cors());
app.use(express.json());

// Example API route
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});