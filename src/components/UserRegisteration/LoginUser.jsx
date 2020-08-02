import React from 'react';
import './RegisterStyling.css';

const LoginUser = () => {
    return (
        <div>
            
            <form className="form-horizontal"  id="form">
  <div class="form-group">

    <div className="col-sm-9">
      <input  type="email" class="form-control input" id="email" placeholder="E-mail Address" required/>
    </div>
  </div>
  <div className="form-group">
     <div className="col-sm-9">
      <input type="password" className="form-control input" id="pwd" placeholder="Password"required/>
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-9">
    </div>
  </div>
  <div className="form-group">
    <div className="col-sm-offset-2 col-sm-9">
      <button type="submit" className="btn btn-primary login">Login</button>
      <a  className="forgot" href="#"> forgot Password?</a>
      <br></br><br></br>
      <span className="with">or login with</span>
      <a  href="#" >facebook</a>
       <a  href="#" >Google</a>
       <a href="#">LinkedIn</a>
      
    </div>
  </div>
</form>

        </div>

    );
}
 
export default LoginUser;