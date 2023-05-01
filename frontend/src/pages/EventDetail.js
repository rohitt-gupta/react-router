import React from "react";
import { useParams } from "react-router-dom";

const EventDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>EventDetail</h1>
			<p>Event ID: {params.eventId}</p>
		</>
	);
};

export default EventDetail;
