"use strict"

import "./style.css"
import React from "react"
import Logo from "./Logo"
import Links from "./Links"

const AppHeader = () => (
	<header className="header-container">
		<nav>
			<Logo text={["My", "Website"]} />
			<Links
				links={[
					"Home",
					"About",
					"Projects",
					"Contact",
				]}
			/>
		</nav>
	</header>
)

export default AppHeader
