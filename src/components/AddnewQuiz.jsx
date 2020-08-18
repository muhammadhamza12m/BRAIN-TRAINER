import React from 'react';
import './mainstyling.css';
import axios from "axios";
import { Grid, TextField, Button } from "@material-ui/core";
import { toast } from 'react-toastify';


const AddnewQuiz = (props) => {
  const [question, setName] = React.useState("");
    const [optionA, setA] = React.useState("");
    const [optionB, setB] = React.useState("");
    const [optionC, setC] = React.useState("");
    const [optionD, setD] = React.useState("");
       const [answer, setanswer] = React.useState("");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="question"
          fullWidth
          value={question}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="optionA"
          fullWidth
          value={optionA}
          onChange={(e) => {
            setA(e.target.value);
          }}
              />
              <TextField
          label="optionB"
          fullWidth
          value={optionB}
          onChange={(e) => {
            setB(e.target.value);
          }}
              />
              <TextField
          label="optionC"
          fullWidth
          value={optionC}
          onChange={(e) => {
            setC(e.target.value);
          }}
              />
              <TextField
          label="optionD"
          fullWidth
          value={optionD}
          onChange={(e) => {
            setD(e.target.value);
          }}
              />
                 <TextField
          label="answer"
          fullWidth
          value={answer}
          onChange={(e) => {
            setanswer(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
          
           axios.post("https://apirestfuldatabase.herokuapp.com/api/questions",{question,optionA,optionB,optionC,optionD,answer})
              .then((res) => {
                console.log(res.data);
                toast.error("ADDED", {
        position: toast.POSITION.TOP_RIGHT
                });
                props.history.push("/questions");

                 
                
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddnewQuiz;