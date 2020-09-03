import React from 'react';

/** ALL Component */
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';


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
              
            </Switch>
          </div>
        <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
