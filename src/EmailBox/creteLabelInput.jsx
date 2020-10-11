import React from "react"
import { mayus } from "../utils"

const inputType = (name, type) =>
	type === "textarea" ? (
		<textarea
			name={name}
			id={name}
			cols="30"
			rows="10"
		></textarea>
	) : (
		<input type={type} name={name} id={name} />
	)
	
const creteLabelInput = ([name, type]) => (
	<div key={name}>
		<label htmlFor={name}>{mayus(name) + ":"}</label>
		{inputType(name, type)}
	</div>
)

export default creteLabelInput
