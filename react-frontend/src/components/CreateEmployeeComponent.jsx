import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
    const { id } = useParams(); // Get the employee ID from the route
    const navigate = useNavigate(); // Hook to navigate programmatically

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    // Fetch employee data if updating
    useEffect(() => {
        if (id !== '_add') {
            EmployeeService.getEmployeeById(id).then(res => {
                const employee = res.data;
                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
            }).catch(err => {
                console.error('Error fetching employee: ', err);
            });
        }
    }, [id]);

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, emailId };
        console.log('Employee =>', employee);

        if (id === '_add') {
            EmployeeService.createEmployee(employee).then(() => {
                navigate('/employees');
            }).catch(err => console.error(err));
        } else {
            EmployeeService.updateEmployee(employee, id).then(() => {
                navigate('/employees');
            }).catch(err => console.error(err));
        }
    };

    const cancel = () => {
        navigate('/employees');
    };

    const getTitle = () => (
        <h3 className="text-center">{id === '_add' ? 'Add Employee' : 'Update Employee'}</h3>
    );

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {getTitle()}
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First Name: </label>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name: </label>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        className="form-control"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Id: </label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployeeComponent;
