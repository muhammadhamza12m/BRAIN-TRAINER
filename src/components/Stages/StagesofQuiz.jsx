import React from 'react';
import './StagesStyling.css';
import image1 from './1.PNG';
import image2 from './2.PNG';
import image3 from './3.PNG';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import MenuBar from '../../components/QuizScreen/TopMenu';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  card: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad','333','cxzcz','dsada','sdada'];
}



const StagesofQuiz = () => {

  
    
    return (

      <div>
        <MenuBar></MenuBar>
        <br></br>
<br></br>
        <div className="card" style={{width:"18rem"}}>
          <div className="card-body">
            
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
           <Link to="/quizScreen" class="card-link">START NOW</Link>
  </div>
        </div>
        <br></br>
          
        
        </div>

      
    
      
    );
}
 
export default StagesofQuiz;