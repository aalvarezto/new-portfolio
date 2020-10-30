"use strict"

import React from "react"
import { css } from "@emotion/core"

const Logo = ({ text }) => (
	<h1 css={styles}>
		{text[0]}
		<span>{text[1]}</span>
	</h1>
)

const styles = css`
	font-family: Arial, Helvetica, sans-serif;
	font-weight: 200;
	font-size: 2em;
	margin: 0;
	color: wheat;

	span {
		font-weight: 800;
		margin: 0;
	}
`

export default Logo
