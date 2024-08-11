const { getEmployees } = require('../models/neo4jModel');

async function fetchAllEmployees(req, res) {
    try {
        const employees = await getEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { fetchAllEmployees };