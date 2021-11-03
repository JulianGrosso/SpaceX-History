import React from "react";
import { StyleDateFilter } from "../style/styles";

export default function DateInput(props) {
	const { onChange, label } = props;

	return (
		<StyleDateFilter>
			<input type="date" onChange={onChange} />
			<p>{label}</p>
		</StyleDateFilter>
	);
}
