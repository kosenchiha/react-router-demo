import React from "react";
import bookings from "./bookings-data.json";

function Bookings() {
  return (
    <div
      style={{
        background: "#FFC0CB",
        width: "80%",
        height: "500px",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      <h1>This is bookings page</h1>
      {bookings.map((booking) => (
        <div key={booking.id}>
          {`Booking for ${booking.title} ${booking.surname}`}
        </div>
      ))}
    </div>
  );
}

export default Bookings;
