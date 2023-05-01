import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventItem from "./../components/EventItem";

const EventDetail = () => {
	const data = useLoaderData();

	return <EventItem event={data.event} />;
};

export default EventDetail;

export async function loader({ request, params }) {
	const id = params.eventId;
	return fetch("http://localhost:8080/events/" + id);
}
