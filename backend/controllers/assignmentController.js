function calculateFitScore(employee, project) {
    if (!project || !project.requiredPositions || !employee || !employee.position) {
        return -1;
    }

    // Only return a positive fit score if the employee's position matches a required position
    return project.requiredPositions.includes(employee.position) ? 3 : -1;
}

function assignEmployeesToProjects(employees, projects) {
    const assignments = [];
    let totalFitScore = 0;
    const assignedEmployees = new Set();  // Track assigned employees

    projects.forEach(project => {
        let projectAssignments = [];
        let projectFitScore = 0;

        employees.forEach(employee => {
            if (!assignedEmployees.has(employee.name)) {
                const fitScore = calculateFitScore(employee, project);

                if (fitScore > 0) {  // Only consider positive fit scores (meaning there's a match)
                    projectAssignments.push({
                        employee,
                        fitScore
                    });
                    projectFitScore += fitScore;
                    assignedEmployees.add(employee.name);  // Mark this employee as assigned
                    console.log(`Assigning ${employee.name} to ${project.name} with fit score ${fitScore}`);
                }
            }
        });

        if (projectAssignments.length > 0) {
            assignments.push({
                project,
                projectAssignments,
                projectFitScore
            });

            totalFitScore += projectFitScore;
        }
    });

    return { assignments, totalFitScore };
}

// controllers/assignmentController.js
const { getEmployees, getProjects } = require('../models/neo4jModel');

async function handleAssignments(req, res) {
    try {
        const employees = await getEmployees();
        const projects = await getProjects();

        if (!employees || !projects) {
            throw new Error("Failed to retrieve employees or projects.");
        }

        const result = assignEmployeesToProjects(employees, projects);
        res.json(result);
    } catch (error) {
        console.error("Error during assignment handling:", error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = { handleAssignments };