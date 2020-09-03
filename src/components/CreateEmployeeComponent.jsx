import React, { Component } from 'react'

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler= this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler= this.changeLastNameHandler.bind(this);
        this.saveEmployee= this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
    }
    changeFirstNameHandler=(event) => {
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event) => {
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler=(event) => {
        this.setState({emailId: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Form Employe</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="first name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="last name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input placeholder="email" name="emailId" className="form-control"
                                        value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent