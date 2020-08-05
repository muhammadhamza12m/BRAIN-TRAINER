import React from 'react';
import ShowModel from './ShowModel';
import axios from "axios";
import './mainstyling.css';

import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

}));




const ShowQs = () => {


      const [questions, setQuestions] = React.useState([]);
  const classes = useStyles();
  const getData = () => {
    axios
      .get("https://apirestfuldatabase.herokuapp.com/api/questions")
      .then((res) => {
          setQuestions(res.data);
          console.log(setQuestions);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getData();
  React.useEffect(getData, []);
  console.log("Inside q/a Component");
    return (
       
        <div  className="main-content">
 
   
      {questions.length ==0 ? (
        <p>There is no data</p>
      ) : (
      
            <div>
               <table class="table">
    <thead>
      <tr>
        <th>Question</th>
            <th>optionA</th>
            <th>optionB</th>
            <th>optionC</th>
                    <th>optionD</th>
                    <th>Answer</th>
              <th>Action</th>

      </tr>
                </thead>
                </table>
          {questions.map((question, index) => (
            <ShowModel key={index} question={question} />
          ))}
       </div>
      )}
    </div>
    );
}
 
export default ShowQs;