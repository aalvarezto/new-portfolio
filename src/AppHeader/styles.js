"use strict"

import { css } from "@emotion/core"

const headerStyles = css`
	background-color: #101010;
	color: wheat;
	height: 5em;
	width: 100%;
	display: flex;
	justify-content: center;
	div {
		height: 100%;
		width: 60em;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h1 {
			font-family: Arial, Helvetica, sans-serif;
			font-weight: 200;
			font-size: 2em;
			margin: 0;

			span {
				font-weight: 800;
				margin: 0;
			}
		}
		nav {
			height: 100%;
			ul {
				height: 100%;
				margin: 0;
				list-style: none;
				display: flex;
				a {
					font-family: Arial, Helvetica,
						sans-serif;
					text-decoration: none;
					list-style: none;
					color: wheat;
					padding: 0 1.25em;
					font-size: 1em;
					height: 100%;
					display: flex;
					align-items: center;
				}
				a:last-child {
					padding-right: 0;
				}
			}
		}
	}
`

export default headerStyles
