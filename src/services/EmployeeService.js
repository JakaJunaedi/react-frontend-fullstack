import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
        
        // Read //
    getEmployees() {
        //console.log(EMPLOYEE_API_BASE_URL);
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
        // Create //
    createEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
        // Update //
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()