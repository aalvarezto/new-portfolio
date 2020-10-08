"use strict"

import React from "react"
import { render } from "react-dom"
import App from "./App"
import "./style.css"

const Deploy = () => (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

render(<Deploy />, document.getElementById("root"))
