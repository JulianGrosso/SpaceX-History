import React from "react";
import { StyledFooter, StyledFooterA } from "../style/styles";
import GitHubLogo from "../assets/github-logo.svg";

export default function Footer() {
	return (
		<StyledFooter>
			<p>Developed by Julian Grosso | 2021</p>
			<StyledFooterA
				href="https://github.com/JulianGrosso"
				target="_blank"
				rel="noopener"
			>
				<img src={GitHubLogo} alt="Github Logo" />
				<p>/JulianGrosso</p>
			</StyledFooterA>
		</StyledFooter>
	);
}
