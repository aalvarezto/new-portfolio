import React from "react"
import { mayus, findType } from "../utils"

const creteLabelInput = x => (
	<div key={x}>
		<label htmlFor={x}>{mayus(x) + ":"}</label>
		<input type={findType(x)} name={x} id={x} />
	</div>
)
export default creteLabelInput
