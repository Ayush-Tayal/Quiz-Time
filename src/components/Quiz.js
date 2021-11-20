import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import questions from '../questions'
import {rightAnswer, wrongAnswer } from '../State/Actions';

const Quiz = () => {
    const [queNo, setQueNo] = useState(0);
    const dispatch = useDispatch();

    const handleNextQue = ()=>{
        setQueNo(queNo + 1)
        // console.log("que number ", queNo)
    }

    const handleOptionsClick=(para)=>{
      para?console.log("true"):console.log("false");
      para?dispatch(rightAnswer()):
      dispatch(wrongAnswer())
      setQueNo(queNo+1);
    }

    const score = useSelector(state => state.scores)



    return (
        <>
          {/* {console.log("quesions", questions)}  */}
          {/* {console.log("ques statement", questions[queNo].questionText)} */}
          {/* {console.log("Answer options", questions[queNo].answerOptions[queNo].answerText)} */}
          {/* {console.log("option 1", questions[queNo].answerOptions[queNo].isCorrect)} */}
          {/* {console.log("", questions[queNo].answerOptions)} */}


        {queNo < 4?
          <div className="main">
            <div className="questions">
            <h1>{questions[queNo].questionText}</h1>
            </div>

            <div className="options">
                {
                questions[queNo].answerOptions.map((option, i)=>{
                  // return <button onClick={()=>option.isCorrect===true ? dispatch(RIGHT_ANSWER()):dispatch(WRONG_ANSWER())} > {option.answerText}</button>
                  return <button onClick={()=>{handleOptionsClick(option.isCorrect)}} > {option.answerText}</button>

                })
                }
            </div>

            <div className="buttons">
                <button className="nextQue" onClick={handleNextQue}>Next Question</button>
                <button className="submit" >Submit</button>
            </div>
          </div> :

          <div className="final-div">
            <h1 className="finalScore">Your Final Score is: {score}</h1>
            <button className="restart" onClick={()=>{window.location.reload()}}>Restart Game</button>
          </div>
        
        }
        
        </>
    )
}

export default Quiz
