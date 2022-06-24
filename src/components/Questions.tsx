import React, { useEffect, useState } from 'react';
import Option from './Options'
import shuffleArray from '../scripts/helper/shuffleArray';
import { Wrapper } from '../scripts/styles'
import type { questionProps } from '../scripts/types'


const Question = (props: questionProps) => {

    const { index, data, select, setScore } = props; // Destructuring props object

    const [question, setQuestion] = useState("");
    const [correct, setCorrect] = useState([""]);
    const [options, setOptions] = useState([""]);
    const [selected, setSelected] = useState(select);

    useEffect(() => { // Formatting data
        setQuestion(data.question);
        setCorrect([data.correctAnswer]);
        setOptions(shuffleArray([data.correctAnswer].concat(data.incorrectAnswers)));

    }, [data.correctAnswer, data.incorrectAnswers, data.question])

    useEffect(() => {
        if (select === "") { return; }
        setSelected(select);

        if (select === correct[0]) { setScore(); console.log("increment") }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);


    return (
        <Wrapper>
            <h4>{index + 1}. {question}</h4>
            <ul className="answers" >
                {options.map((element) => {
                    return <Option value={element} correct={element === correct[0]} index={index} selected={selected} />
                })}
            </ul>
        </Wrapper>
    )
}

export default Question;