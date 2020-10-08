"use strict"

import React from "react"
import creteLabelInput from "./creteLabelInput"

const FormFields = ({ props }) => (
	<fieldset>
		<legend>{props.legend}</legend>
		{props.fields.map(creteLabelInput)}
		<textarea
			name="mail-box"
			id=""
			cols="30"
			rows="10"
		></textarea>
		<button>Send</button>
	</fieldset>
)

export default FormFields
