import React from 'react';
import QuestionModel from './QuestionModel';
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles((theme) => ({

}));




const Questions = () => {


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
       
        <div>
 
   
      {questions.length ==0 ? (
        <p>There is no data</p>
      ) : (
      
                <div>
          {questions.map((question, index) => (
            <QuestionModel key={index} question={question} />
          ))}
       </div>
      )}
    </div>
    );
}
 
export default Questions;