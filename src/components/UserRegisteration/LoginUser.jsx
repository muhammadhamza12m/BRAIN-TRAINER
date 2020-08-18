import React from 'react';
import './RegisterStyling.css';
import {BrowserRouter as Router, Route, Link, Switch } from  'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const LoginUser = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
    return (
        <div>
            
        
  <div class="">

    <div className="col-sm-9">
              <input type="email" class="" id="email" placeholder="E-mail Address" required
               label="email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
                }}
              />
    </div>
  </div>
  <div className="">
     <div className="col-sm-9">
              <input type="password" className="" id="pwd" placeholder="Password" required
              label="password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
              />
    </div>
  </div>
  <div className="">
    <div className="col-sm-offset-2 col-sm-9">
    </div>
  </div>
  <div className="">
    <div className="col-sm-offset-2 col-sm-9">
              <button type="" className="btn btn-primary login"
               variant="contained"
          color="primary"
          onClick={(e) => {
           
                axios.post("https://apirestfuldatabase.herokuapp.com/api/users/login",{email,password})
              .then((res, req) => {
                 props.history.push("/StagesQuiz");
              
                  toast.error(res.data, {
        position: toast.POSITION.TOP_RIGHT
                });
                
                
              })
              .catch((err) => {
                console.log(err);
                  toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT
                });
                
            
              });
          }}>
                
                Login</button>
      <a  className="forgot" href="#"> forgot Password?</a>
      <br></br><br></br>
      <span className="with">or login with</span>
      <a  href="#" >facebook</a>
       <a  href="#" >Google</a>
       <a href="#">LinkedIn</a>
      
    </div>
  </div>
    
        
        </div>

    );
}
 
export default LoginUser;