import React, { useEffect, useState } from 'react';

type optionProps = {
	value: string,     // Option string
	correct: boolean,  // Whether the option is a correct answer
	index: number,     // Question number
	selected: string,  // Currently selected option
}


function Option(props: optionProps) {
	const [className, setClassName] = useState("question");
	const { selected, value, index, correct } = props;

	useEffect(() => {
		function computeClassName(): string {

			if (correct) { return "correct"; }
			else { return (selected === value) ? "wrong" : "question"; }
		}

		if (selected === "") { return; }
		setClassName(computeClassName())

	}, [selected, correct, value]);

	return (
		<li key={value}>
			<label className={className}>
				<input type="radio" value={value} name={index.toString()} />
				{value}
			</label>
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