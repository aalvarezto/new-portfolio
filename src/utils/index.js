"use strict"

const mayus = x => x.slice(0, 1).toUpperCase() + x.slice(1)

const createKey = (value, tag) =>
	`${value.replace(" ", "").toLowerCase()}-${tag}`

export { mayus, createKey }
