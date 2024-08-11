// config/neo4jConfig.js
const neo4j = require('neo4j-driver');
require('dotenv').config();  // Load environment variables

const driver = neo4j.driver(process.env.NEO4J_URI, neo4j.auth.basic(process.env.NEO4J_USERNAME, process.env.NEO4J_PASSWORD));
const session = driver.session();

module.exports = { driver, session };