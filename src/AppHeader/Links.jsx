"use strict"

import React from "react"

const Links = ({ links }) => (
	<ul>
		{links.map((link, i) => (
			<a href="foo.com" key={`${link + i}`}>
				<li>{link}</li>
			</a>
		))}
	</ul>
)

export default Links
