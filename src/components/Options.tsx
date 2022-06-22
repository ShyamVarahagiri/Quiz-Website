import React, { useEffect, useState } from 'react';
import { Label } from '../scripts/styles';
import type { optionProps } from '../scripts/types';

const Option = (props: optionProps) => {
	const [submit, setSubmit] = useState(false);
	const [select, setSelect] = useState(false);
	const { selected, value, index, correct } = props;

	useEffect(() => {
		if (selected === "") { return; }

		setSelect(selected === value);
		setSubmit(true);

	}, [selected, value]);

	return (
		<li key={value}>
			<Label selected={select} submitted={submit} correct={correct} >
				<input type="radio" value={value} name={index.toString()} />
				{value}
			</Label>
		</li>
	);
}

export default Option;

/* class Option extends React.Component<optionProps, optionState>{

	constructor(props: optionProps) {
		super(props);
		this.state = {
			className: "question"
		}
	}

	computeClassName(): string {
		const { correct, selected, value } = this.props;

		if (correct) { return "correct"; }
		else { return (selected === value) ? "wrong" : "question"; }
	}

	componentDidUpdate(prevProps: optionProps) {
		if (prevProps.selected !== this.props.selected) {
			this.setState({
				className: this.computeClassName()
			})
		}
	}

	render() {
		const { value, index } = this.props;
		const { className } = this.state;
		return (
			<li key={value}>
				<label className={className}>
					<input type="radio" value={value} name={index.toString()} />
					{value}
				</label>
			</li>
		)
	}
} */