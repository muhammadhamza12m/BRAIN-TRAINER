import React from 'react';
import './RegisterStyling.css';
import axios from "axios";

const RegisterUser = (props) => {
  const [email, setEmail] = React.useState("usman.akram@gmail.com");
  const [password, setPassword] = React.useState("usman");
  const [name, setName] = React.useState("usman");
    return (
        <div>
            <form className="form-horizontal"  id="form">
  <div className="form-group">

     <div className="form-group">   <div class="col-sm-9">
              <input type="text" className="form-control input" id="name" placeholder="Full Name" required
               label="Name"
          
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}/>
    </div>
</div>

    <div className="col-sm-9">
              <input type="email" className="form-control input" id="email" placeholder="E-mail Address" required
               label="email"
          
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
    </div>
  </div>
  <div className="form-group">
     <div className="col-sm-9">
              <input type="password" className="form-control input" id="pwd" placeholder="Password" required
               label="password"
          type="password"
          
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}/>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-9">
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-9">
              <button type="submit" className="btn btn-primary register"
              variant="contained"
          color="primary"
          onClick={(e) => {
          
            console.log("working");
               axios.post("https://apirestfuldatabase.herokuapp.com/api/users/register",{ name, email, password })
              .then((res, req) => {
               
              console.log("working");
                console.log(res.name);
                console.log("working");
                 props.history.push("/register");
              })
              .catch((err) => {
                console.log(err);
              });
          
          
          }}
              >Register</button>
                        <br></br><br></br>

      <span className="with">or register with</span>
       <a  href="#" >facebook</a>
       <a  href="#" >Google</a>
       <a  href="#">LinkedIn</a>
      
    </div>
  </div>
</form>


        </div>
    );
}
 
export default RegisterUser;