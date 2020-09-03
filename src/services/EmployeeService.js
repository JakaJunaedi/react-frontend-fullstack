import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
        
    getEmployees() {
        //console.log(EMPLOYEE_API_BASE_URL);
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

}

export default new EmployeeService()