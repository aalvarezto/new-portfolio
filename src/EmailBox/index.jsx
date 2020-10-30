"use strict"

import React from "react"
import FormFields from "./FormFields"
import emailBoxStyles from "./styles"
import Star from "../utils/Logo-tw.svg"

const EmailBox = ({ props }) => (
	<div css={emailBoxStyles}>
		<form action="">
			<FormFields props={{ ...props }} />
		</form>
		<Star />
	</div>
)

export default EmailBox
