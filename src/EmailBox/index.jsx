"use strict"

import React from "react"
import FormFields from "./FormFields"

const EmailBox = ({ props }) => (
	<>
		<form action="">
			<FormFields props={{ ...props }} />
		</form>
	</>
)

export default EmailBox
