import React from "react";
import { colors, Grid } from "@material-ui/core";

import { blue } from "@material-ui/core/colors";


const QuestionModel = ({question}) => {
    
  return (

      <div>
        
        <br></br>

        <div className="container">
          <h3 className="" style={{ paddingLeft: 1, }}>{question.quest}</h3>
          
           <label class="radio-inline">
      <input type="radio" name="optradio"/>&#160; &#160; {question.optionA}
          </label>
<br></br>
            <label class="radio-inline">
      <input type="radio" name="optradio"/>&#160; &#160; {question.optionB}
          </label>
 <br></br>
            <label class="radio-inline">
      <input type="radio" name="optradio"/>&#160; &#160; {question.optionC}
          </label>
<br></br>
            <label class="radio-inline">
      <input type="radio" name="optradio"/>&#160; &#160; {question.optionD}
          </label>


      </div>
      
    </div>
    
    );
}

 
export default QuestionModel;