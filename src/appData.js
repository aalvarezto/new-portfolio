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
	links: ["Projects", "Contact"],
}

const footerProps = {
	logo: ["Andrés", "Alvarez"],
	links: ["Home", "About", "Projects", "Blog", "Contact"],
}

export { contactFields, headerProps, footerProps }
