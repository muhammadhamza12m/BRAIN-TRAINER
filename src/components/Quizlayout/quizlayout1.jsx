import React from 'react';
const quizlayout1 = () => {
    return (

        <div>
<div className="container">
            <h1>Quiz</h1>
            <h2>Question 1</h2>
            <h3>Which class provides a full width container, spanning the entire width of the viewport?</h3>

            <div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample1">Option 1</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" checked/>
  <label class="custom-control-label" for="defaultGroupExample2">Option 2</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios"/>
  <label class="custom-control-label" for="defaultGroupExample3">Option 3</label>
                </div>
                <br></br>
                <button type="button" class="btn btn-dark">Submit</button>
                </div>
        </div>
    );
}
 
export default quizlayout1;