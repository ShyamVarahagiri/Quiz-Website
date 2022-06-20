import React, { useEffect, useState } from 'react';
import Option from './Options'
import shuffleArray from '../scripts/helper/shuffleArray';
import type { questionProps } from '../scripts/types'


function Question(props: questionProps) {

    const { index } = props;
    const opt = props.data[Object.keys(props.data)[0]];

    const [correct] = useState(opt.c);
    const [options] = useState(shuffleArray(opt.c.concat(opt.w)));
    const [selected, setSelected] = useState(props.selected);

    useEffect(() => {
        setSelected(props.selected);
    }, [props.selected]);


    return (
        <div className='Question'>
            <h4>{index + 1}. {Object.keys(props.data)[0]}</h4>
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