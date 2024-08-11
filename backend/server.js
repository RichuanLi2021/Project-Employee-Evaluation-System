require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');

// Debug logs to verify environment variables
console.log('NEO4J_URI:', process.env.NEO4J_URI);
console.log('NEO4J_USERNAME:', process.env.NEO4J_USERNAME);
console.log('NEO4J_PASSWORD:', process.env.NEO4J_PASSWORD ? '********' : 'Not Set');
console.log('PORT:', process.env.PORT);

const employeeRoutes = require('./routes/employees');
const projectRoutes = require('./routes/projects');
const assignmentRoutes = require('./routes/assignments');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/employees', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/assignments', assignmentRoutes);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));