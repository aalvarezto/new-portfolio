"use strict"

import React from "react"
import EmailBox from "./EmailBox"
import AppHeader from "./AppHeader"

const contactFields = {
	legend: "Contact us:",
	fields: ["name", "email", "phone"],
}

const App = () => (
	<>
		<AppHeader />
		<h1>Hello There</h1>
		<EmailBox props={{ ...contactFields }} />
	</>
)

export default App
