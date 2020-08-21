import React from "react";
import bookings from "./bookings-data.json";

function Booking(props) {
  const bookingId = props.match.params.id;
  const bookingToDisplay = bookings.find(
    (booking) => booking.id + "" === bookingId
  );
  return (
    <div>
      <p>id from url is: {bookingId}</p>
      <pre>{JSON.stringify(bookingToDisplay, null, 2)}</pre>
    </div>
  );
}

export default Booking;
