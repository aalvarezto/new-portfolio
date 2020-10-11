"use strict"

import React from "react"
import EmailBox from "./EmailBox"
import AppHeader from "./AppHeader"
import { contactFields, headerProps } from "./appData"

const App = () => (
	<>
		<AppHeader props={{ ...headerProps }} />
		<EmailBox props={{ ...contactFields }} />
	</>
)

export default App
