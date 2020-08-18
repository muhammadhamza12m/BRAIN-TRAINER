import React from "react";
import { colors, Grid } from "@material-ui/core";

import { blue } from "@material-ui/core/colors";
import { useEffect, useState , useCallback } from 'react';
import Summary from './Summary';


const QuestionModel = ({question }) => {

  const [option, setoption] = React.useState("");
   var [q, setQ] = React.useState([12]);
  let correct = 0, wrong = 0;

  //setQ(12);

    //const [correct, setQuestions] = React.useState([]);
 
             
  
  
  const  setValues =() =>{
  setQ(12);
  
 
  }
  
const  handleOptionChange =(changeEvent) =>{
  setoption(changeEvent.target.value)
  
 
  }
  const getData = () => { 
    setQ = 5;
  }
  return (

      <div>
        
        <br></br>

      <div className="container" >
        <div>
          <h3 className="" style={{ paddingLeft: 1, }}>{question.question}</h3>
          
            <label class="radio-inline">
            <input type="radio" value= {question.optionA}
              checked={option === question.optionA} onChange={handleOptionChange} />&#160; &#160; {question.optionA}
          </label>
<br></br>
            <label class="radio-inline">
            <input type="radio" value= {question.optionB}
              checked={option === question.optionB} onChange={handleOptionChange} />&#160; &#160; {question.optionB}
          </label>
 <br></br>
            <label class="radio-inline">
            <input type="radio" value= {question.optionC}
              checked={option === question.optionC} onChange={handleOptionChange} />&#160; &#160; {question.optionC}
          </label>
<br></br>
            <label class="radio-inline">
            <input type="radio" value= {question.optionD}
              checked={option === question.optionD} onChange={handleOptionChange} />&#160; &#160; {question.optionD}
          </label>


</div>

      </div>
      <button
        onClick={(e) => {
   
          // props.history.push("/Summary");
          getData();
          console.log('You have selected:', { option });
          if (option === question.answer) {
            console.log("Correct Anwer");
            correct++;
            
          }
          else {
            console.log("Wrong Answer");
            wrong++;
          }
      
          
           q.map((question, index) => (
             <Summary key={index} question={question} correct={"ddddddddddddddddddddddd"} />
             
              ))

            console.log(q);
 
        }
       
        }
      >PUSH</button>
    </div>
    
    );
}

 
export default QuestionModel;