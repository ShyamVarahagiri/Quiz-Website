import React, { FormEvent, useEffect, useState } from 'react';
import Question from './Questions'
import { SButton, Loader } from '../scripts/styles'


const Quiz = (_props: any) => {

	const [submit, setSubmit] = useState<boolean>(false);
	const [score, setScore] = useState<number | null>(null);
	const [data, setData] = useState<Object[]>([]);
	const [loaded, setLoad] = useState<boolean>(false);

	function increment() { // Update score if answer is correct
		setScore(score => (score === null) ? 1 : score + 1);
	}

	useEffect(() => { // Fetching API data
		fetch('https://the-trivia-api.com/api/questions?limit=10&region=IN')
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoad(true);
			})
	}, []);


	function handleSubmit(event: FormEvent) {
		event.preventDefault();

		for (let i = 0; i < data.length; i++) {
			try {
				let inp: HTMLInputElement | null = document.querySelector("input[name=" + CSS.escape(i.toString()) + "]:checked");
				if (inp === null) { throw new TypeError(); }
			} // Try/Catch to check if all options have been selected at form submit
			catch {
				alert("All options must be selected!");
				return;
			}
		} // After validation count the quiz score

		const submitButton: any = document.getElementById("submit");
		submitButton.disabled = true; // Disable further form inputs

		setSubmit(true);
	}

	if (loaded) {
		return (
			<div className="main">
				<h1>React Quiz</h1>
				<form className='Quiz' onSubmit={handleSubmit}>
					{data.map((element: any, index: number) => {
						const input: any = document.querySelector("input[name=" + CSS.escape(index.toString()) + "]:checked");
						return <Question data={element} index={index} select={(submit) ? input.value : ""} setScore={increment} />
					})}
					<div className='Submit'><SButton type="submit" id='submit'>{(score !== null) ? <span>Score: {score} / {data.length}</span> : "Submit"}</SButton></div>
				</form>
			</div>
		)
	}
	else { return (<div>Loading...</div>) } // Loading screen while waiting for API
}

export default Quiz;