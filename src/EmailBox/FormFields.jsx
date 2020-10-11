"use strict"

import React from "react"
import creteLabelInput from "./creteLabelInput"

const FormFields = ({ props }) => (
	<fieldset>
		<legend>{props.legend}</legend>
		{props.fields.map(creteLabelInput)}
		<button>Send</button>
	</fieldset>
)

export default FormFields
