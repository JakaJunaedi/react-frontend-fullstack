import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8085/api/v1/employees";

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
        // Update form //
    getEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
        // Update save //
    updateEmployee(employee, employeeId) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }
        // Delete employe //
    deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

}

export default new EmployeeService()