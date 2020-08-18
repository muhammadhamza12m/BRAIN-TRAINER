import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Summary = (props) => {
    
    return (
        <div>
           
                <Fragment>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                <h1>Quiz {props.correct}</h1>
                    <div className="container stats">
                      
                        <h2>Your Score: 1</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="right">2</span><br />

                        <span className="stat left">Number of attempted questions: </span>
                        <span className="right">2</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">1</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">1</span><br />

                        <span className="stat left">Hints Used: </span>
                        <span className="right">0</span><br />

                    
                    </div>
                    <section>
                        <ul>
                            <li>
                                <Link to ="/play/quiz">Play Again</Link>
                            </li>
                            <li>
                                <Link to ="/">Back to Home</Link>
                            </li>
                        </ul>
                    </section>
                </Fragment>
           
        </div>
    );
}
 

export default Summary;