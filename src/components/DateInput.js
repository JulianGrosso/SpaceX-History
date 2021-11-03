import React from "react";

export default function DateInput(props) {
	const { onChange, label } = props;

	return (
		<div className="date-input">
			<label>{label}</label>
			<input type="date" onChange={onChange} />
		</div>
	);
}
