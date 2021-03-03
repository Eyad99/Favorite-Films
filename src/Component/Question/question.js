import React, {useState,useRef} from 'react';
import './question.css'

const Question = () => {
  
    const selectCategory = useRef();
    // const radioEasy = useRef();
    // const radioMedium = useRef();
    // const radioHard = useRef();
    const difficulty =[
        // radioEasy,
        // radioMedium,
        // radioHard
        document.getElementById("easy"),
        document.getElementById("medium"),
        document.getElementById("hard")
    ]
    const inputNumber = useRef();
    const buttonSend = useRef();
    const quiz = useRef();
    const questions = useRef();

    
    const startQuizApi= async() =>{
        const amount = getAmount();
        const categoryId = selectCategory.current.value;
        const difficulty = getDifficulty();
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple&encode=url3986`);
        const {results} = await response.json();
        getHiddinDiv();
 
    }

    const getAmount=()=>{
       let amount= inputNumber.current.value;
       if(amount > 0 && amount <20){
           return amount
       }
       else{
           alert('Enter Amount')
       }
    }
    const getDifficulty =()=>{
        const difficultys = difficulty.filter(el =>el.checked);
        if(difficultys.length === 1){
           return difficultys[0].id
        }
        else{
            alert("Enter Difficulty")
        }
    }
    const getHiddinDiv=()=>{
        quiz.current.style.display = "none";
        questions.current.style.display = "inline";

    }

    return (
        <div className="Question">
            <div className="quiz" ref={quiz}>
                <div className="category">
                <h3>Quiz App</h3>
                        <p>Select Category</p>
                        <select name="" ref={selectCategory}>
                            <option value="11">Film</option>
                            <option value="21">Sports</option>
                            <option value="23">History</option>
                        </select>
                </div>
                <div className="difficulty" >
                    <p>Choose Difficulty</p>
                    <label htmlFor="easy">easy</label>
                        <input type="radio" name="radio" id="easy"/>
                    <label htmlFor="medium">medium</label>
                        <input type="radio" name="radio" id="medium" />
                    <label htmlFor="hard">hard</label>
                        <input type="radio" name="radio" id="hard" />
                </div>
                <div className="nquestion">
                    <p>Number Of Question</p>
                    <input type="number" ref={inputNumber} />
                </div>
                <button className="btn btn-outline-success mt-3" ref={buttonSend} onClick={startQuizApi}>send</button>
            </div>

            <div className="questions" ref={questions}>
                <div className="count"></div>

                <h2 id="question"></h2>
                <label id="a1" className="answer"></label>
                <label id="a2" className="answer"></label>
                <label id="a3" className="answer"></label>
                <label id="a4" className="answer"></label>

            </div>

            <div className="final">
                <h4>you answeer all questions</h4>
                <p className="score"></p>
                <h5>try agine</h5>
                <button id="agine">Agine</button>
            </div>
            
        </div>

    );
};



export default Question;