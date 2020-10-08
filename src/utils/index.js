"use strict"

const mayus = x => x.slice(0, 1).toUpperCase() + x.slice(1)
const isMail = x => (x === "email" ? "email" : "text")

export { mayus, isMail }
