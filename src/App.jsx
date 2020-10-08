"use strict"

import React from "react"
import EmailBox from "./EmailBox"

const contactFields = {
	legend: "Contact us:",
	fields: ["name", "email", "phone"],
}

const App = () => (
	<>
		<h1>Hello There</h1>
		<EmailBox props={{ ...contactFields }} />
	</>
)

export default App
