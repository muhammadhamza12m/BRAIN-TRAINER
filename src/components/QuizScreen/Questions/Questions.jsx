import React from 'react';
import QuestionModel from './QuestionModel';
import axios from "axios";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
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
  console.log("Inside Products Component");
    return (
       
        <div>
            
      <h1>Products</h1>
      <Fab color="primary" aria-label="add" className={classes.addBtn}>
        <AddIcon />
      </Fab>
      {questions.length ==0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {questions.map((question, index) => (
            <QuestionModel key={index} product={question} />
          ))}
        </Grid>
      )}
    </div>
    );
}
 
export default Questions;