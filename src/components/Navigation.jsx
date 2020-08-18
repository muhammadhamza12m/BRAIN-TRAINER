import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap';
import './mainstyling.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import Dashboard from "./Dashboard";
import AddnewQuiz from './AddnewQuiz';
import ViewActiveQuiz from './ViewActiveQuiz';
import Result from './Result';
import User from './User';
import Logout from './Logout';
import quizalladmin from './ShowQs';


const Navigation = () => {
    return (
        <Router>
        <div>
            
                    <div className="header">
            <div className="logo">
                <i className="fa fa-tachometer"></i>
                <span>Control Panel</span>
            </div>
            <a href="#" className="nav-trigger"><span></span></a>
        </div>
        <div className="side-nav">
            <div className="logo">
                <i className="fa fa-tachometer"></i>
                <span>Control Panel</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Dashboard">
                            <span><i className="fa fa-user"></i></span>
                            <span>Dashboard</span>
                        </Link>
                        </li>
                        
                    <li>
                        <Link to="/AddnewQuiz">
                            <span><i className="fa fa-envelope"></i></span>
                            <span>Add new Questions</span>
                        </Link>
                            </li>
                            
                             <li>
                        <Link to="/ViewQuestions">
                            <span><i className="fa fa-envelope"></i></span>
                            <span>View Questions</span>
                        </Link>
                            </li>
                            
                        
                  
                    <li>
                        <Link to="/Users">
                            <span><i className="fa fa-credit-card-alt"></i></span>
                            <span>Users</span>
                        </Link>
                        </li>
                        
                    <li>
                        <Link to="/Logout">
                            <span><i className="fa fa-credit-card-alt"></i></span>
                            <span>Logout</span>
                        </Link>
                    </li>
                </ul>
            </nav>
                </div>
                <Switch>
                  
                    
          <Route path="/AddnewQuiz" component={AddnewQuiz} ></Route>
          <Route path="/ViewActiveQuiz" component={ViewActiveQuiz} ></Route>
          <Route path="/Result" component={Result} ></Route>
          <Route path="/Users" component={User} ></Route>
                    <Route path="/Logout" component={Logout} ></Route>
                    <Route path='/ViewQuestions' component={quizalladmin}></Route>
                       <Route path="/Dashboard" component={Dashboard} ></Route>
                </Switch>
</div>
</Router>
        
    );
}
 
export default Navigation;