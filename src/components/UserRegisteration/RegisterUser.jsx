import React from 'react';
import './RegisterStyling.css';
import axios from "axios";
import {  toast } from 'react-toastify';
  

const RegisterUser = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const RegisterTo = async() => {
     console.log("working");
            await axios(
              {
                method: "POST",
                url: "https://apirestfuldatabase.herokuapp.com/api/users/register",
                data:  { name, email, password }
}         )
              .then((res, req) => {
                toast.success(res.data, {
        position: toast.POSITION.TOP_RIGHT
      });
              props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT
      });

              });
          
    
  }
    return (
        <div>
          
  <div className="">

     <div className="">   <div class="col-sm-9">
              <input type="text" className="" id="name" placeholder="Full Name" required
               label="Name"
          
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}/>
    </div>
</div>

    <div className="col-sm-9">
              <input type="email" className="" id="email" placeholder="E-mail Address" required
               label="email"
          
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>
    </div>
  </div>
  <div className="">
     <div className="col-sm-9">
              <input type="password" className="" id="pwd" placeholder="Password" required
               label="password"
          type="password"
          
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}/>
    </div>
  </div>
  <div className="">
    <div className="col-sm-offset-2 col-sm-9">
    </div>
  </div>
  <div className="">
    <div className="col-sm-offset-2 col-sm-9">
            <button type="" className="btn btn-primary login"
             
              onClick={() => {
                 RegisterTo();
              }
               
                }
              >Register</button>
                        <br></br><br></br>

      <span className="with">or register with</span>
       <a  href="#" >facebook</a>
       <a  href="#" >Google</a>
       <a  href="#">LinkedIn</a>
      
    </div>
        </div>
        


        </div>
  );
  
}
 
export default RegisterUser;