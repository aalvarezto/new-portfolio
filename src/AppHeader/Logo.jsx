"use strict"

import React from "react"

const Logo = ({ text }) => (
	<h1>
		{text[0]}
		<span>{text[1]}</span>
	</h1>
)

export default Logo
