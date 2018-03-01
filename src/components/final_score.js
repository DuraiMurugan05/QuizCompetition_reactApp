import React from "react";

const FinalScore = (props) => {

return (
    <div className="final-score" >
        {props.score < 25? (
         <div>
        <h2>Your score is less than average score {props.score}</h2>
        <button onClick={props.onReload} className="restart-btn">Play Again</button>
         </div> ):  (  <div>
                <h2>Great Job! Your score is {props.score}</h2>
                <button onClick={props.onReload} className="restart-btn">Play Again</button>
            </div>)}
    </div>)
};

export default FinalScore;