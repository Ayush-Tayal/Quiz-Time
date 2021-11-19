import React, { useState } from 'react'
import questions from '../questions'

const Quiz = () => {
    const [queNo, setQueNo] = useState(0);

    const handleNextQue = ()=>{
        setQueNo(queNo + 1)
        // console.log("que number ", queNo)
    }

    return (
        <>
          {/* {console.log("quesions", questions)} ;
          {console.log("ques statement", questions[queNo].questionText)}
          {console.log("Answer options", questions[queNo].answerOptions[0].answerText)} */}

        {queNo < 4?
          <div className="main my-3 container">
            <div className="questions">
            <h4>{questions[queNo].questionText}</h4>
            </div>

            <div className="options">
                <button className="btn">{questions[queNo].answerOptions[0].answerText}</button>
                <button className="btn">{questions[queNo].answerOptions[1].answerText}</button>
                <br/>
                <button className="btn">{questions[queNo].answerOptions[2].answerText}</button>
                <button className="btn">{questions[queNo].answerOptions[3].answerText}</button>
            </div>

            <div className="buttons">
                <button className="btn btn-primary">Submit</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleNextQue}>Next Question</button>
            </div>
          </div> :

          setQueNo(0)
        
        }
        
        
        
        
        
        
        
        
        </>
    )
}

export default Quiz
