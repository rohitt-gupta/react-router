import React from "react";
import EventForm from "./../components/EventForm";
import { useLoaderData } from "react-router-dom";
const EditEvent = () => {
	const data = useLoaderData();
	return <EventForm event={data?.event} />;
};

export default EditEvent;
