"use strict"

import React from "react"
import { css } from "@emotion/core"

const Links = ({ links }) => (
	<ul css={styles}>
		{links.map((link, i) => (
			<a href="foo.com" key={`${link + i}`}>
				<li>{link}</li>
			</a>
		))}
	</ul>
)

const styles = css`
	height: 100%;
	margin: 0;
	list-style: none;
	display: flex;
	padding-left: 0;
	a {
		font-family: Arial, Helvetica, sans-serif;
		text-decoration: none;
		list-style: none;
		color: #aaaaaa;
		padding: 0 1.25em;
		font-size: 1em;
		height: 100%;
		display: flex;
		align-items: center;
	}
	a:last-child {
		padding-right: 0;
	}
`

export default Links
