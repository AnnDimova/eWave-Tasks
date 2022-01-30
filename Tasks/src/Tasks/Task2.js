/* Task 2:
Create a sum function that takes 3 parameters a, b and c. If the function was called with all three arguments, it should return their sum. If only a (or a and b) was passed, the sum function should return a function that rememebers the earlier passed arguments until all 3 arguments have been passed. */

import React from 'react';
import { useState } from 'react';

export default function Display() {
	const [ result, setResult ] = useState(0);
	const [ num1, setNum1 ] = useState(0);
	const [ num2, setNum2 ] = useState(0);
	const [ num3, setNum3 ] = useState(0);

	function Add() {
		if (!num1 || !num2 || !num3 || num1 < 0 || num2 < 0 || num3 < 0) return;

		setResult(num1 + num2 + num3);
	}

	function Reset() {
		setNum1(0);
		setNum2(0);
		setNum3(0);
		setResult(0);
	}

	return (
		<div className="container m-5 text-center">
			<h2>Task 2 </h2>
			<h2>{result}</h2>

			<input
				type="number"
				placeholder="Number 1"
				value={num1}
				onChange={(e) => setNum1(Number(e.target.value))}
			/>
			<input
				type="number"
				placeholder="Number 2"
				value={num2}
				onChange={(e) => setNum2(Number(e.target.value))}
			/>
			<input
				type="number"
				placeholder="Number 3"
				value={num3}
				onChange={(e) => setNum3(Number(e.target.value))}
			/>

			<div>
				{' '}
				<button variant="primary" onClick={() => Add()}>
					Add
				</button>{' '}
				<button variant="secondary" onClick={() => Reset()}>
					Reset
				</button>
			</div>
		</div>
	);
}
