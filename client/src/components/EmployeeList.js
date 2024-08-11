import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/employees`)
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the employees!", error);
            });
    }, []);

    if (!employees) {
        return <div>Loading employees...</div>;
    }

    return (
        <div>
            <h1>Employees</h1>
            <ul>
                {employees.map((employee, index) => (
                    <li key={index}>
                        {employee.name} - Position: {employee.position} - Department: {employee.department}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeList;