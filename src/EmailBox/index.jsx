"use strict"

import React from "react"
import FormFields from "./FormFields"

const EmailBox = () => (
	<div>
		<form action="">
			<FormFields
				legend="Contact us:"
				fields={["name", "email", "phone"]}
			/>
		</form>
	</div>
)

export default EmailBox
