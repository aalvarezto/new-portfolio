"use strict"

import React from "react"
import Logo from "../AppHeader/Logo"
import Links from "../AppHeader/Links"
import toNAMESTYLE from "./styles"

const AppFooter = ({ props }) => (
	<footer css={toNAMESTYLE}>
		<div>
			<Logo text={props.logo} />
			<nav>
				<Links links={props.links} />
			</nav>
		</div>
	</footer>
)

export default AppFooter
