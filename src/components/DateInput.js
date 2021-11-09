import React from "react";
import { StyleDateFilter } from "../style/styles";

export default function DateInput(props) {
	const { onChange, label } = props;

	return (
		<StyleDateFilter>
			<input
				type="date"
				onChange={onChange}
				min="2008-09-28"
				max="2018-08-07"
			/>
			<p>{label}</p>
		</StyleDateFilter>
	);
}
