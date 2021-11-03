import React from "react";
import { useEffect, useState } from "react";
import { fetchHistory } from "./api";
import "./App.css";
import DateInput from "./components/DateInput";
import MissionCard from "./components/MissionCard";

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
		<div>
			<h1>The SpaceX History</h1>
			<div>
				<DateInput
					label="Start Date"
					onChange={(e) => setStartDate(e.target.value)}
				/>
				<DateInput
					label="End Date"
					onChange={(e) => setEndtDate(e.target.value)}
				/>
			</div>
			<div>
				{data.map((item, idx) => {
					return <MissionCard key={idx} mission={item} />;
				})}
			</div>
		</div>
	);
}
