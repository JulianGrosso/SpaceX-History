import React from "react";
import { StyledMissionCard } from "../style/styles";

const cutDetails = (value) => {
	if (value.length > 180) {
		return value.slice(0, 177) + "...";
	} else {
		return value;
	}
};

export default function MissionCard(props) {
	const { mission } = props;
	const date = new Date(mission.event_date_utc);
	const details = cutDetails(mission.details);

	return (
		<StyledMissionCard>
			<h3>{mission.title}</h3>
			<div>Mission Date: {date.toLocaleDateString()}</div>
			<p>{details}</p>
		</StyledMissionCard>
	);
}
