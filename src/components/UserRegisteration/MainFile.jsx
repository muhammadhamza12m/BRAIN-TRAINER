import React from 'react';
import './RegisterStyling.css';
import bgimage from './bgimg.jpg';
import LoginUser from './LoginUser';
import RegisterUser from './RegisterUser';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const MainFile = () => {
    return (
        
        <Router>

        <div>
            
            <div className="row mainrow" >
        <div className="col-lg-5 col-sm-5 col-md-5 col-xl-5 col-12">
          
           <img className="bg" src={bgimage}/>

        </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-xl-7 col-12 align-items-center"  >
                    
                    <div className="container condiv" > 
                         <h1>Life is nothing but a competition to be the criminal rather than the victim.</h1>
                <h2  >I love anything quiz related.</h2>  <br></br>

                            <Link style={{ textDecoration:"none"}} className="a11"  to ="/login">Login</Link>
        <Link style={{borderColor: "white",fontWeight:"bold"}}className="a22"  to="/register">Register</Link>
                            <br></br><br></br>
                              <Switch>
          <Route path="/login" component={LoginUser} ></Route>
          <Route path="/register" component={RegisterUser} ></Route>
        </Switch>
        </div>
       
           </div>
       </div>
                </div>
                </Router>
    );
}
 
export default MainFile;