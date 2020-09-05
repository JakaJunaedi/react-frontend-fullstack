import React from 'react';

/** ALL Component */
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


/** CSS */
import './App.css';

/** Route Url */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path ="/" exact component={ListEmployeeComponent} />
              <Route path ="/employees" component={ListEmployeeComponent} />
              <Route path ="/add-employee" component={CreateEmployeeComponent} />
              <Route path ="/update-employee/:id" component={UpdateEmployeeComponent} />
              <Route path ="/view-employee/:id" component={ViewEmployeeComponent} />
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
