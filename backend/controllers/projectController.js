const { getProjects } = require('../models/neo4jModel');

async function fetchAllProjects(req, res) {
    try {
        const projects = await getProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { fetchAllProjects };