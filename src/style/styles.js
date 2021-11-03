import styled, { createGlobalStyle } from "styled-components";
import imgBackgroundTitle from "../assets/background-01.jpg";

const device = {
	xs: "max-width: 767px",
	sm: "min-width: 768px) and (max-width: 1200px",
	lg: "min-width: 1500px",
};

// --------- Global Style ---------

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		height: 100vh;
		width: 100vw;	
		font-family: 'Barlow', sans-serif;	
		background-color: #f2f2f2;
		overflow-x: hidden;
	}

	a:link,
	a:visited,
	a:active {
		text-decoration: none;
	}
`;

export const StyledMainSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// --------- Title Section ---------

export const StyledTitleSection = styled.div`
	background-image: url(${imgBackgroundTitle});
	background-position: center bottom;
	background-size: cover;
	background-repeat: no-repeat;

	width: 100vw;
	height: 45rem;

	display: flex;
	flex-direction: column;

	@media screen and (${device.lg}) {
		height: 55rem;
	}

	@media screen and (${device.sm}) {
		height: 50rem;
	}

	@media screen and (${device.xs}) {
		height: 30rem;
		align-items: center;
	}
`;

export const StyledLogo = styled.div`
	width: 16rem;
	height: auto;

	margin-left: 6rem;

	background-color: white;
	padding: 2rem;

	@media screen and (${device.lg}) {
		margin-left: 12rem;
	}

	@media screen and (${device.xs}) {
		width: 12rem;
		padding: 1rem 0.5rem 1rem 1rem;
		margin-left: 0rem;
	}
`;

export const StyledTitle = styled.h1`
	font-size: 3.5rem;
	font-weight: bold;
	text-align: left;

	max-width: 35rem;

	margin-top: 14rem;
	margin-left: 6rem;

	color: white;

	@media screen and (${device.lg}) {
		margin-top: 18rem;
		margin-left: 12rem;
	}

	@media screen and (${device.sm}) {
		max-width: 20rem;
		margin-top: 10rem;
	}

	@media screen and (${device.xs}) {
		font-size: 2rem;
		text-align: left;

		width: 80vw;
		margin-top: 8rem;
		margin-left: 0rem;
	}
`;

// --------- Mission Section ---------

// --------- Date Filters---------

export const StyleDateFilterContainer = styled.div`
	width: 45%;

	margin-top: 2rem;
	padding-bottom: 0.8rem;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	border-bottom: solid 2px black;

	& p {
		font-size: 2rem;
		font-weight: normal;
		padding-left: 1rem;
		padding-right: 1rem;
		margin-top: -0.5rem;

		@media screen and (${device.xs}) {
			padding-left: 0rem;
			padding-right: 0rem;
			margin-top: 0rem;
			margin-bottom: 0.5rem;

			text-align: center;
		}
	}

	& input {
		width: 9rem;
		height: 2rem;

		font-family: "Barlow", sans-serif;
		font-weight: 500;
		text-align: right;
	}

	@media screen and (${device.sm}) {
		border-bottom: solid 1.5px black;
		width: 80vw;
	}

	@media screen and (${device.xs}) {
		margin-top: 1rem;
		flex-direction: column;
	}
`;

export const StyleDateFilter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-left: 1rem;
	margin-right: 1rem;

	& p {
		font-size: 1rem;
		font-weight: 500;
		margin-top: 0.2rem;
	}
`;

// --------- Mission Cards ---------

export const StyledMissionSection = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	justify-content: center;
	align-items: center;

	padding-top: 1.5rem;
	padding-bottom: 2rem;

	& :hover {
		cursor: pointer;
	}
`;

export const StyledMissionCard = styled.div`
	height: 15rem;
	width: 20rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	margin: 1rem;
	padding: 1.5rem;

	border-radius: 0.6rem;

	background-color: hsl(0, 0%, 8%);
	color: white;

	user-select: none;

	& h3 {
		text-align: center;
		font-size: 1.3rem;

		padding-bottom: 0.5rem;
		width: 100%;

		border-bottom: solid 1px white;
	}

	& div {
		text-align: center;
		margin-top: 0.5rem;
	}

	& p {
		text-align: center;
		margin-top: 1.5rem;
		margin-bottom: 0.5rem;
	}

	@media screen and (${device.xs}) {
		width: 96vw;
	}
`;

// --------- Footer ---------

export const StyledFooter = styled.div`
	background-color: hsl(0, 0%, 8%);
	color: white;

	width: 100vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 4rem;
	padding-bottom: 4rem;

	& p {
		font-size: 1rem;
	}
`;

export const StyledFooterA = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;

	& p {
		margin-left: 0.4rem;
		font-size: 1rem;
		color: hsl(0, 0%, 100%);
	}
`;
