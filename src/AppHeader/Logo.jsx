"use strict"

import React from "react"

const Logo = ({ text }) => (
	<div className="logo">
		<h1>
			{text[0]}
			<span>{text[1]}</span>
		</h1>
	</div>
)

export default Logo
