import React, { useState } from 'react'
// import { useDispatch } from 'react-redux';
import questions from '../questions'

const Quiz = () => {
    const [queNo, setQueNo] = useState(0);

    const handleNextQue = ()=>{
        setQueNo(queNo + 1)
        // console.log("que number ", queNo)
    }

    // const dispatch = useDispatch();

    return (
        <>
          {/* {console.log("quesions", questions)} ;
          {console.log("ques statement", questions[queNo].questionText)}
          {console.log("Answer options", questions[queNo].answerOptions[0].answerText)} */}

        {queNo < 4?
          <div className="main">
            <div className="questions">
            <h4>{questions[queNo].questionText}</h4>
            </div>

            <div className="options">
                <button>{questions[queNo].answerOptions[0].answerText}</button>
                <button>{questions[queNo].answerOptions[1].answerText}</button>
                <button>{questions[queNo].answerOptions[2].answerText}</button>
                <button>{questions[queNo].answerOptions[3].answerText}</button>
            </div>

            <div className="buttons">
                <button className="btn btn-success">Submit</button>
                <button className="btn btn-info my-4 mx-5" onClick={handleNextQue}>Next Question</button>
            </div>
          </div> :

          <div>
            <h1 className="finalScore">Your Final Score is </h1>
            <button className="restart" onClick={()=>{window.location.reload()}}>Restart Game</button>
          </div>
        
        }
        
        
        
        
        
        
        
        
        </>
    )
}

export default Quiz
