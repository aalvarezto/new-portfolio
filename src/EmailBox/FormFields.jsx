"use strict"

import React from "react"
import { mayus, isMail } from "../utils"

const FormFields = ({ legend, fields }) => (
	<fieldset>
		<legend>{legend}</legend>
		{fields.map(x => (
			<div key={x}>
				<label htmlFor={x}>{mayus(x) + ":"}</label>
				<input type={isMail(x)} name={x} id={x} />
			</div>
		))}
	</fieldset>
)

export default FormFields
