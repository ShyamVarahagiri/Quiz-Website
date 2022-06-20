import React, { FormEvent, useEffect, useState } from 'react';
import Question from './Questions'
import type { Answer } from '../scripts/types'



const Quiz = (props: any) => {

    const [submit, setSubmit] = useState(false);
    const [score, setScore] = useState<number | null>(null);
    const [data, setData] = useState<Object[] | null>(null);
    const [q, setQ] = useState<{ [key: string]: Answer }[]>([]);
    const [loaded, setLoad] = useState(false);

    useEffect(() => {
        fetch('https://the-trivia-api.com/api/questions?limit=15&region=IN')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
    }, []);

    useEffect(() => {
        if (!data) { return; }
        data.forEach((element: any) => {
            let question: string = element.question;
            let correct: string = element.correctAnswer;
            let wrong: string[] = element.incorrectAnswers;
            let obj: { [key: string]: Answer } = {};
            obj[question] = { c: [correct], w: wrong };
            q.push(obj);
        });
        setQ(q);
        setLoad(true);
    }, [data, q]);


    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        let score = 0;

        for (let i = 0; i < q.length; i++) {
            try {
                let inp: HTMLInputElement | null = document.querySelector("input[name=" + CSS.escape(i.toString()) + "]:checked");
                if (inp === null) { throw new TypeError(); }
                if (inp.value === Object.values(q[i])[0].c[0]) { score++; }
            } // Try/Catch to check if all options have been selected at form submit
            catch {
                alert("All options must be selected!");
                return;
            }
        } // After validation count the quiz score

        const submitButton: any = document.getElementById("submit");
        submitButton.disabled = true;

        setSubmit(true);
        setScore(score);
    }

    if (loaded) {
        return (
            <div className="main">
                <h1>React Quiz</h1>
                <form className='Quiz' onSubmit={handleSubmit}>
                    {q.map((element, index) => {
                        const input: any = document.querySelector("input[name=" + CSS.escape(index.toString()) + "]:checked");
                        return <Question data={element} index={index} selected={(submit) ? input.value : ""} />
                    })}
                    <div className='Submit'><button type="submit" id='submit'>{(score !== null) ? <span>Score: {score} / {q.length}</span> : "Submit"}</button></div>
                </form>
            </div>
        )
    }
    else { return (<div></div>) }
}

export default Quiz;

/* type quizState = {
    ques: { [key: string]: Answer }[];
    submit: number,
    score: number | null
};

class Quiz extends React.Component<quizProps, quizState> {

    constructor(props: quizProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state: quizState = {
        ques: [ // Store all Question --> Answer pairs as an object
            { "Which of the following command is used to install create-react-app?": { c: ["npm install -g create-react-app"], w: ["npm install create-react-app", "npm install -f create-react-app", "install -g create-react-app"] } },
            { "What of the following is used in React.js to increase performance?": { c: ["Virtual DOM"], w: ["Original DOM", "Both the options", "None of the options"] } },
            { "How many numbers of elements a valid react component can return?": { c: ["1"], w: ["2", "3", "4"] } },
            { "Which of the following acts as the input of a class-based component?": { c: ["Props"], w: ["Class", "Factory", "Render"] } },
            { "What is the default port where webpack-server runs?": { c: ["8080"], w: ["3000", "3030", "6060"] } },
        ],
        submit: 0,   // Variable to keep track of form submits
        score: null // Store the quiz score
    }

    handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { ques } = this.state;
        let score = 0;

        for (let i = 0; i < ques.length; i++) {
            try {
                let inp: HTMLInputElement | null = document.querySelector("input[name=" + CSS.escape(i.toString()) + "]:checked");
                if (inp === null) { throw new TypeError(); }
                if (inp.value === Object.values(ques[i])[0].c[0]) { score++; }
            } // Try/Catch to check if all options have been selected at form submit
            catch {
                alert("All options must be selected!");
                return;
            }
        } // After validation count the quiz score

        this.setState((prevState) => ({ submit: prevState.submit + 1, score }))
    }

    render() { // Render main quiz body
        const { submit, score, ques } = this.state;
        return (
            <div className="main">
                <h1>React Quiz</h1>
                <form className='Quiz' onSubmit={this.handleSubmit}>
                    {ques.map((element, index) => {
                        return <Question data={element} submit={submit} index={index} />
                    })}
                    <div className='Submit'><button type="submit">{(score !== null) ? <span>Score: {score} / {ques.length}</span> : "Submit"}</button></div>
                </form>
            </div>
        );
    }
} */