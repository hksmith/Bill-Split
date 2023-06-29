const express = require('express');
const cors = require('cors'); 
const app = express();
const paymentRoutes = require('./src/app/routes/paymentRoutes');
const splitRoutes = require('./src/app/routes/splitRoutes');

// Middleware
app.use(cors()); 
app.use(express.json());

// Routes
app.use('/api', paymentRoutes);
app.use('/api', splitRoutes);

// Start the server
const port = 3000; 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
