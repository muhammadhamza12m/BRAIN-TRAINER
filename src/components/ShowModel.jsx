import React from "react";
import { colors, Grid } from "@material-ui/core";
import axios from "axios";
axios.defaults.baseURL = "https://apirestfuldatabase.herokuapp.com/api/";



const ShowModel = ({question}) => {
    
  return (

      <div>
        
        <br></br>

        <div className="container">

  

        <table class="table container">
  
    <tbody>
      <tr>
        <td>{question.question}</td>
        <td>{question.optionA}</td>
            <td>{question.optionB}</td>
            <td>{question.optionC}</td>
              <td>{question.optionD}</td>
               <td>{question.answer}</td>
              
              <button
                //onClick={(e) => {
          
          //      axios.delete("https://apirestfuldatabase.herokuapp.com/api/questions/"+ question._id)
          //     .then((res) => {
          //       console.log(res.data);
          //      question.history.delete("/questions");
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //     });
          // }}
          //     >
          //       delete
          //     </button>


          //     <button
                
          //        onClick={async (e) => {
          //         var qq = prompt("write Question here");
          //         question.quest = qq;
          //         var a = prompt("write  option A");
          //         question.optionA = a;
          //         var b = prompt("write  option B");
          //         question.optionB = b;
          //         var c = prompt("write  option C");
          //         question.optionC = c;
          //         var d = prompt("write  option D");
          //         question.optionD = d;
          //         var ans = prompt("write  Answer");
          //         question.answer = ans;
          //         console.log(question._id);
          //         console.log(question.quest);
          //         console.log(question.optionA);
                  
          //   await   axios.put("https://apirestfuldatabase.herokuapp.com/api/questions/",question.quest)
          //     .then((res, req) => {
               
          //       question.question = qq;
          //        question.optionA = a;
          //       console.log(res.data);
          //     question.history.push("/questions");
          //     })
          //     .catch((err) => {
          //       console.log(err);
          //     });
          // }}
              
              ></button>
      </tr>      
    
    </tbody>
  </table>
      
      </div>
      </div>
    
    );
}

 
export default ShowModel;