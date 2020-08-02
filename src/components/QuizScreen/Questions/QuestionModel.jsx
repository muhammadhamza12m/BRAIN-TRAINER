import React from "react";
import { Grid } from "@material-ui/core";
const QuestionModel = ({question}) => {
    return (

        <Grid item xs={4}>
      <h2>{question.name}</h2>
      <p>{question.price}</p>
      <hr />
    </Grid>
    );
}
 
export default QuestionModel;