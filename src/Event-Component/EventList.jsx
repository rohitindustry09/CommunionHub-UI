import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import "./EventList.css";

const initialEvents = [
  {
    id: 1,
    title: "Udagi Celebrations",
    date: "2025-03-30",
    endDate: "2025-03-31",
    time: "10:00 AM IST - 11:00 PM IST",
    type: "FREE",
    image: "udagi.jpg",
  },
  {
    id: 2,
    title: "Game Celebrations",
    date: "2025-03-30",
    endDate: "2025-03-31",
    time: "10:00 AM IST - 11:00 PM IST",
    type: "FREE",
    image: "peoplesEvent.jpg",
  },
  {
    id: 3,
    title: "Fundraising Marathon",
    date: "2025-04-02",
    endDate: "2025-04-03",
    time: "10:00 AM IST - 4:00 PM IST",
    type: "DONATION",
    image: "udagi.jpg",
  },
];

const EventList = () => {
   const { action } = useParams();
  const [events, setEvents] = useState(initialEvents);
  const [filter, setFilter] = useState("Next Week");
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    endDate: "",
    time: "",
    type: "FREE",
    image: "",
  });

  const today = new Date("2025-03-27");

  const filterEvents = () => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      const timeDiff = (eventDate - today) / (1000 * 60 * 60 * 24);

      switch (filter) {
        case "Today":
          return timeDiff === 0;
        case "Tomorrow":
          return timeDiff === 1;
        case "This Week":
          return timeDiff >= 0 && timeDiff < 7;
        case "Next Week":
          return timeDiff >= 7 && timeDiff < 14;
        case "This Month":
          return eventDate.getMonth() === today.getMonth();
        default:
          return true;
      }
    });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.endDate || !newEvent.time || !newEvent.image) {
      alert("Please fill all fields.");
      return;
    }
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setShowForm(false);
    setNewEvent({ title: "", date: "", endDate: "", time: "", type: "FREE", image: "" });
  };

  const filteredEvents = filterEvents();

  return (
    <div className="container mt-5">
  
      {/* Add Event Button */}
      {/* <div className="text-center my-3">
        <button className="btn btn-success px-4" onClick={() => setShowForm(true)}>
          ➕ Create Event
        </button>
      </div>
   */}
      {/* If creating a new event, show only the form */}
      {action === "create" ? (
        <div className="card p-4 shadow-sm">
          <h4 className="mb-3">📅 Create New Event</h4>
          <form onSubmit={handleAddEvent}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  value={newEvent.endDate}
                  onChange={(e) => setNewEvent({ ...newEvent, endDate: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Time</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., 10:00 AM - 5:00 PM"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  required
                />
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Type</label>
                <select
                  className="form-select"
                  value={newEvent.type}
                  onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                >
                  <option value="FREE">Free</option>
                  <option value="DONATION">Donation</option>
                  <option value="PAID">Paid</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., event.jpg"
                  value={newEvent.image}
                  onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark w-100">📌 Add Event</button>
          </form>
          <button className="btn btn-danger w-100 mt-3" onClick={() => setShowForm(false)}>❌ Cancel</button>
        </div>
      ) : <></>}
        <>
        <h2 className="text-center mt-3">✨ Upcoming Events</h2>
  
  <div className="d-flex justify-content-center gap-2 my-3">
    {["Today", "Tomorrow", "This Week", "Next Week", "This Month"].map((btn) => (
      <button
        key={btn}
        className={`btn btn-custom ${filter === btn ? "btn-primary" : "btn-outline-primary"}`}
        onClick={() => setFilter(btn)}
      >
        {btn}
      </button>
    ))}
  </div>
          {/* Event Listing */}
          <div className="row mt-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <div className="col-md-4" key={event.id}>
                  <div className="card shadow-sm p-3 mb-4">
                    <img src={event.image} className="card-img-top" alt={event.title} />
                    <div className="card-body">
                      <span className={`badge ${event.type === "FREE" ? "bg-success" : "bg-info"}`}>{event.type}</span>
                      <h5 className="card-title mt-2">{event.title}</h5>
                      <p className="card-text"><i className="bi bi-calendar2-event"></i> {event.date} - {event.endDate}</p>
                      <p className="card-text"><i className="bi bi-alarm"></i> {event.time}</p>
                      <a href="#" className="btn btn-dark w-100">Event Details →</a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center w-100 my-4">
                <h4 className="text-muted">No events found for "{filter}"</h4>
              </div>
            )}
          </div>
        </>
    </div>
  );
};

export default EventList;