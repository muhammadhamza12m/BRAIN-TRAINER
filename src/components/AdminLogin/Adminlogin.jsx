import React from 'react';
import './adminStyling.css';
import { Link } from 'react-router-dom';
const Adminlogin = () => {
    return (

        <div>
<div className="mainbg row align-items-center h-100  " >

    <div className="smain  container "    >
       
        <h1 className="container">Login to account</h1>
          <p className="container h2">Access to the most powerful tool in the entire design and web industry.</p>
  
          <form className="form-horizontal container si"  id="form" >
  <div className="form-group" >

    <div >
      <input type="email" class="form-control f2" id="email" placeholder="E-mail Address"/>
    </div>
  </div>
  <div className="form-group">
     <div >
      <input type="password" className="form-control f2" id="pwd" placeholder="Password"/>
   <br></br>
    <Link to="/panel" >  <button type="submit" className=" col-sm-4" >Login</button> </Link>
   
       <a className="a1" href="forgot.html">Forget Password?</a> <br></br><br></br>

                                

       <br></br> <br></br>
                            
      
      
      
  </div>
  </div>
</form>
      

    </div>
 
</div>
        </div>

    );
}
 
export default Adminlogin;