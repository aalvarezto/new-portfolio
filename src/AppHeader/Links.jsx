"use strict"

import React from "react"
import { css } from "emotion"

const Links = ({ links }) => (
	<ul className={linkStyles}>
		{links.map((link, i) => (
			<a href="#" key={`${link + i}`}>
				<li>{link}</li>
			</a>
		))}
	</ul>
)

const linkStyles = css`
	height: 100%;
	float: right;

	a {
		height: 100%;
		padding: 0px 20px;
		display: table;
		float: left;

		li {
			height: 100%;
			font-size: 16px;
			color: white;
			display: table-cell;
			vertical-align: middle;
		}
	}

	a:last-child {
		padding-right: 0;
	}
`

export default Links
