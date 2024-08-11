const neo4j = require('neo4j-driver');
require('dotenv').config();  // Load environment variables from .env file

// Create a Neo4j driver instance using credentials from .env
const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD));
const session = driver.session();

// Run a simple query to test the connection
session.run('MATCH (n) RETURN n LIMIT 1')
    .then(result => {
        console.log('Connection successful:', result.records);
        console.log('NEO4J_URI:', process.env.NEO4J_URI);
        console.log('NEO4J_USERNAME:', process.env.NEO4J_USERNAME);
        console.log('NEO4J_PASSWORD:', process.env.NEO4J_PASSWORD);
        session.close();
        driver.close();
    })
    .catch(error => {
        console.error('Connection failed:', error);
        session.close();
        driver.close();
    });