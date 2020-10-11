"use strict"

import { css } from "@emotion/core"

const emailBoxStyles = css`
	width: 80%;
	margin: 0 auto;
	padding: 1em;
	background-color: #efb106;
	display: flex;
	justify-content: center;
	flex-flow: row nowrap;
	font-family: Arial, Helvetica, sans-serif;

	fieldset {
		border: 1px solid black;
		border-radius: 10px;
		legend {
			font-weight: bold;
			font-size: 1.3rem;
			margin-top: 1.5rem;
			margin-bottom: 1rem;
			display: block;
		}
		label {
			display: block;
		}
		textarea {
			display: block;
			margin-bottom: 2rem;
			width: 20rem;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 1em;
			border-radius: 10px;
			padding: 0 1rem;
		}
		button {
			margin: 2rem 0;
			background-color: #bb342f;
			color: white;
			border: none;
			font-size: 1rem;
			padding: 0.5rem 1rem;
			border-radius: 10px;
		}
		button:hover {
			background-color: #9a2b27;
		}
	}
`

export default emailBoxStyles
