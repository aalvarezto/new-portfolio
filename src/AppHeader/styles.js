"use strict"

import { css } from "@emotion/core"

const headerStyles = css`
	background-color: #101010;
	color: wheat;
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	div {
		height: 100%;
		width: 1000px;
		display: flex;
		justify-content: space-between;
		h1 {
			font-family: Arial, Helvetica, sans-serif;
			font-weight: 200;
			font-size: 32px;
			height: 100%;
			margin: 0;
			display: flex;
			align-items: center;
			span {
				font-weight: 800;
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
					padding: 0 20px;
					font-size: 16px;
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
