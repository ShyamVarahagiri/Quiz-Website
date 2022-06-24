import React, { useEffect, useState } from 'react';
import { Label } from '../scripts/styles';
import type { optionProps } from '../scripts/types';

const Option = (props: optionProps) => {
	const [submit, setSubmit] = useState(false);
	const [select, setSelect] = useState(false);
	const { selected, value, index, correct } = props;

	useEffect(() => {
		if (selected === "") { return; } // Skip initial rendering

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