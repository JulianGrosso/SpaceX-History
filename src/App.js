import React from "react";
import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import MissionCard from "./components/MissionCard";
import {
	GlobalStyle,
	StyledMainSection,
	StyledTitle,
	StyledTitleSection,
	StyledMissionSection,
	StyleDateFilterContainer,
} from "./style/styles";

export default function App() {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndtDate] = useState(null);
	const [data, setData] = useState([]);

	const getHistory = async () => {
		const history = await fetchHistory({
			start: startDate,
			end: endDate,
		});
		setData(history);
	};

	useEffect(() => {
		getHistory();
	}, [startDate, endDate]);

	return (
		<React.Fragment>
			<GlobalStyle />
			<StyledMainSection>
				<StyledTitleSection>
					<Logo />
					<StyledTitle>SPACE-X HISTORICAL MILESTONES</StyledTitle>
				</StyledTitleSection>
				<StyleDateFilterContainer>
					<p>DATE FILTER</p>
					<DateInput
						label="START DATE"
						onChange={(e) => setStartDate(e.target.value)}
					/>
					<DateInput
						label="END DATE"
						onChange={(e) => setEndtDate(e.target.value)}
					/>
				</StyleDateFilterContainer>
				<StyledMissionSection>
					{data.map((item, idx) => {
						return <MissionCard key={idx} mission={item} />;
					})}
				</StyledMissionSection>

				<Footer />
			</StyledMainSection>
		</React.Fragment>
	);
}
