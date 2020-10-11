"use strict"

import React from "react"
import FormFields from "./FormFields"
import emailBoxStyles from "./styles"

const EmailBox = ({ props }) => (
	<div css={emailBoxStyles}>
		<form action="">
			<FormFields props={{ ...props }} />
		</form>
	</div>
)

export default EmailBox
