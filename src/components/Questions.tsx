import React, { useEffect, useState } from 'react';
import Option from './Options'
import shuffleArray from '../scripts/helper/shuffleArray';
import type { questionProps } from '../scripts/types'


const Question = (props: questionProps) => {

    const { index, data, select, setScore } = props; // Destructuring props object

    const [question, setQuestion] = useState("");
    const [correct, setCorrect] = useState([""]);
    const [options, setOptions] = useState([""]);
    const [selected, setSelected] = useState(select);

    useEffect(() => {
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
        <div className='Question'>
            <h4>{index + 1}. {question}</h4>
            <ul className="answers" >
                {options.map((element) => {
                    return <Option value={element} correct={element === correct[0]} index={index} selected={selected} />
                })}
            </ul>
        </div>
    )
}

export default Question;

/*  type questionState = {
    opt: Answer,
    key: string,
    correct: string[],
    options: string[],
    selected: string,
    curr: string
};

    class Question extends React.Component<questionProps, questionState> {

    constructor(props: questionProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            opt: this.props.data[Object.keys(this.props.data)[0]],
            key: Object.keys(this.props.data)[0],
            correct: [""],
            options: [""],
            selected: "",
            curr: ""
        };
    }


    componentDidMount() {

        const { opt } = this.state;

        this.setState({
            correct: opt.c,
            options: shuffleArray(opt.c.concat(opt.w))
        })
    }

    componentDidUpdate(prevProps: questionProps) {

        const { submit } = this.props;

        if (prevProps.submit !== submit) {
            this.setState((prevState: questionState) => {
                return { selected: prevState.curr }
            });
        }
    }

    handleChange(event: any) {
        this.setState({ curr: event.target.value })
    }

    render() {

        const { key, correct, options, selected } = this.state;
        const { index } = this.props;

        return (
            <div className='Question'>
                <h4>{index + 1}. {key}</h4>
                <ul className="answers" onChange={this.handleChange}>
                    {options.map((element) => {
                        return <Option value={element} correct={element === correct[0]} index={index} selected={selected} />
                    })}
                </ul>
            </div>
        )
    }
} */