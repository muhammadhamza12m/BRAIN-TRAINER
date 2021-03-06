import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./components/Navigation";
import Result from './components/Result';
import User from './components/User';
import Logout from './components/Logout';
import MainFile from './components/UserRegisteration/MainFile';
import LoginUser from './components/UserRegisteration/LoginUser';
import RegisterUser from './components/UserRegisteration/RegisterUser';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Adminlogin from './components/AdminLogin/Adminlogin';
import StagesofQuiz from './components/Stages/StagesofQuiz';
import Quizlayout1 from './components/Quizlayout/quizlayout1';
import Profile from './components/Profile/Profile';
import Questions from './components/QuizScreen/Questions/Questions';
import { ToastContainer, toast } from 'react-toastify';
 import Summary from './components/QuizScreen/Questions/Summary'
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   /* <Router>
    <div>
      <Navigation></Navigation>
      
        <Switch>

          <Route path="/Dashboard" component={Dashboard} ></Route>
          <Route path="/AddnewQuiz" component={AddnewQuiz} ></Route>
          <Route path="/ViewActiveQuiz" component={ViewActiveQuiz} ></Route>
          <Route path="/Result" component={Result} ></Route>
          <Route path="/Users" component={User} ></Route>
          <Route path="/Logout" component={Logout} ></Route>
          

        </Switch>
        
      </div>
      </Router>*/
    
    <Router>
      <div>
        <ToastContainer />

        <Switch>

             
          
        
          <Route path="/Summary" component={Summary} ></Route>
          <Route path= '/quizScreen' component={Questions}></Route>
          
          <Route path="/admin" component={Adminlogin} ></Route>
          <Route path="/panel" component={Navigation} ></Route>
      
           <Route path="/StagesQuiz"  component={StagesofQuiz} ></Route>
          <Route path='/' component={MainFile}></Route>
          

        </Switch>
       
      </div>
      </Router>
  );
}

export default App;
