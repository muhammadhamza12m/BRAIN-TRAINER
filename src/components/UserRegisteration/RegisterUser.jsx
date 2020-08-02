import React from 'react';
import './RegisterStyling.css';

const RegisterUser = () => {
    return (
        <div>
            <form class="form-horizontal"  id="form">
  <div class="form-group">

     <div class="form-group">   <div class="col-sm-9">
      <input type="text" class="form-control input" id="email" placeholder="Full Name"required/>
    </div>
</div>

    <div class="col-sm-9">
      <input type="email" class="form-control input" id="email" placeholder="E-mail Address"required/>
    </div>
  </div>
  <div class="form-group">
     <div class="col-sm-9">
      <input type="password" class="form-control input" id="pwd" placeholder="Password"required/>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-9">
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-9">
                        <button type="submit" className="btn btn-primary register">Register</button>
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