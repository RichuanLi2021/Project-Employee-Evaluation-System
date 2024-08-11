import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignmentList = () => {
    const [assignments, setAssignments] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/assignments`)
            .then(response => {
                setAssignments(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the assignments!", error);
            });
    }, []);

    if (!assignments) {
        return <div>Loading assignments...</div>;
    }

    return (
        <div>
            <h1>Assignments</h1>
            <h2>Total Fit Score for All Projects: {assignments.totalFitScore}</h2>
            {assignments.assignments.map((assignment, index) => (
                <div key={index}>
                    <h3>{assignment.project?.name || 'Unknown Project'} - Total Fit Score: {assignment.projectFitScore}</h3>
                    <ul>
                        {assignment.projectAssignments.map((projectAssignment, index) => (
                            <li key={index}>
                                {projectAssignment.employee?.name || 'Unknown Employee'} ... {projectAssignment.fitScore}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default AssignmentList;