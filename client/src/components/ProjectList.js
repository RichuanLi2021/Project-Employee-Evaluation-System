import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/projects`)
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects!", error);
            });
    }, []);

    if (!projects) {
        return <div>Loading projects...</div>;
    }

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        {project.name} - Department: {project.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectList;