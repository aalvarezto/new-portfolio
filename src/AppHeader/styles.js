"use strict"

import { css } from "@emotion/core"

const headerStyles = css`
	background-color: #111;
	height: 5em;
	width: 100%;
	display: flex;
	justify-content: center;
	div {
		height: 100%;
		width: 60em;
		display: flex;
		justify-content: space-between;
		align-items: center;

		nav {
			height: 100%;
		}
	}
`

export default headerStyles
