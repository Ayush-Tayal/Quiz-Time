import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import questions from "../questions";
import { rightAnswer, wrongAnswer } from "../State/Actions";

const Quiz = () => {
  const dispatch = useDispatch();

  const [queNo, setQueNo] = useState(0);

  const score = useSelector((state) => state.scores);

  const [checkSubmit, setcheckSubmit] = useState(false)

  const handleNextQue = () => {
    setQueNo(queNo + 1);
    // console.log("que number ", queNo)
  };

  const handlePrevQue=()=>{
    queNo>0?setQueNo(queNo-1):setQueNo(0)
  }

  const handleOptionsClick = (isRight) => {
    isRight ? console.log("true") : console.log("false");
    isRight ? dispatch(rightAnswer()) : dispatch(wrongAnswer());
    setQueNo(queNo + 1);
  };

  const handleSubmit = () => {
    alert("Are you sure want to submit the Quiz");
    setcheckSubmit(true)
  };

  return (
    <>
      {/* {console.log("quesions", questions)}  */}
      {/* {console.log("ques statement", questions[queNo].questionText)} */}
      {/* {console.log("Answer options", questions[queNo].answerOptions[queNo].answerText)} */}
      {/* {console.log("option 1", questions[queNo].answerOptions[queNo].isCorrect)} */}
      {/* {console.log("", questions[queNo].answerOptions)} */}

      {queNo < 4 && !checkSubmit? (
        <div className="main">
          <div className="questions">
            <h1>{questions[queNo].questionText}</h1>
          </div>

          <div className="options">
            {questions[queNo].answerOptions.map((option, i) => {
              return (
                <button
                  onClick={() => {
                    handleOptionsClick(option.isCorrect);
                  }} 
                  key={i}
                >
                  {" "}
                  {option.answerText}
                </button>
              );
            })}
          </div>

          <div className="buttons">
            <div className="prevNext">
              <button className="prevQue" onClick={handlePrevQue}>
                  Previous Question
              </button>

              <button className="skipQue" onClick={handleNextQue}>
                  Skip Question
              </button>
            </div>

            <button className="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) 
      :
      (
        <div className="final-div">
          <h1 className="finalScore">Your Final Score is: {score}</h1>
          <button
            className="restart"
            onClick={() => {
              window.location.reload();
            }}
          >
            Restart Game
          </button>
        </div>
      )}
    </>
  );
};

export default Quiz;
