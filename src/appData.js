"use strict"

const contactFields = {
	legend: "Contact us:",
	fields: [
		["name", "text"],
		["email", "email"],
		["phone", "tel"],
		["contact us", "textarea"],
	],
}

const headerProps = {
	logo: ["Andrés", "Alvarez"],
	links: ["Home", "About", "Projects", "Contact"],
}

export { contactFields, headerProps }
