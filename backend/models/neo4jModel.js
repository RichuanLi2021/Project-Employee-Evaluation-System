// models/neo4jModel.js
const { driver } = require('../config/neo4jConfig');

async function getEmployees() {
    const session = driver.session();
    try {
        const result = await session.run('MATCH (e:Employee) RETURN e');
        return result.records.map(record => record.get('e').properties);
    } catch (error) {
        console.error("Error fetching employees:", error);
        throw error;
    } finally {
        session.close();  // Ensure session is closed after the query
    }
}

async function getProjects() {
    const session = driver.session();
    try {
        const result = await session.run('MATCH (p:Project) RETURN p');
        return result.records.map(record => record.get('p').properties);
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
    } finally {
        session.close();  // Ensure session is closed after the query
    }
}

module.exports = { getEmployees, getProjects };