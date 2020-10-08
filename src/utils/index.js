"use strict"

const mayus = x => x.slice(0, 1).toUpperCase() + x.slice(1)

const findType = element =>
	element === "email"
		? "email"
		: element === "phone"
		? "tel"
		: "text"

const createKey = (value, tag) =>
	`${value.replace(" ", "").toLowerCase()}-${tag}`

export { mayus, findType, createKey }
