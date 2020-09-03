import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
   
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }
   
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employe List</h2>
                <div className="row">
                    <button className="btn btn-primary mb-2" onClick={this.addEmployee}>Add Employe</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employe First Name</th>
                                <th>Employe Last Name</th>
                                <th>Employe Email</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map
                                (
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent;