"use strict"

import React from "react"
import EmailBox from "./EmailBox"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"
import {
	contactFields,
	footerProps,
	headerProps,
} from "./appData"

const App = () => (
	<>
		<AppHeader props={{ ...headerProps }} />
		<EmailBox props={{ ...contactFields }} />
		<AppFooter props={{ ...footerProps }} />
	</>
)

export default App
