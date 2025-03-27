import React from "react";
import { useParams } from "react-router-dom";
import EventList from "./EventList";

const EventTab = () => {
  const { action } = useParams();

  return (
    <div>
      <h1 className="text-center">{action === "create" ? "Create Event" : "Events"}</h1>
      <EventList action={action} />
    </div>
  );
};

export default EventTab;