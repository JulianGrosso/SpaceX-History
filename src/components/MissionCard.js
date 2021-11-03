import React from "react";

const cutDetails = (value) => {
	if (value.length > 140) {
		return value.slice(0, 137) + "...";
	} else {
		return value;
	}
};

export default function MissionCard(props) {
	const { mission } = props;
	const date = new Date(mission.event_date_utc);
	const details = cutDetails(mission.details);

	return (
		<div>
			<h3>{mission.title}</h3>
			<div>Mission Date: {date.toLocaleDateString()}</div>
			<p>Description: {details}</p>
		</div>
	);
}
