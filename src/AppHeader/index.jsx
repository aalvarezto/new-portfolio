"use strict"

import React from "react"
import Logo from "./Logo"
import Links from "./Links"
import headerStyles from "./styles"

const AppHeader = ({ props }) => (
	<header css={headerStyles}>
		<div>
			<Logo text={props.logo} />
			<nav>
				<Links links={props.links} />
			</nav>
		</div>
	</header>
)

export default AppHeader
