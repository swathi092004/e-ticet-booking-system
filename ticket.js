// Simulated data for event details
const eventData = {
    eventName: "Concert Name",
    eventDate: "October 31, 2023",
    eventLocation: "Venue Name",
};

// Event details display
const eventDetails = document.querySelector(".event-details");
eventDetails.innerHTML = `
    <h2>Event Details</h2>
    <p>Event Name: ${eventData.eventName}</p>
    <p>Date: ${eventData.eventDate}</p>
    <p>Location: ${eventData.eventLocation}</p>
`;

// Ticket booking form
const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const ticketQuantity = parseInt(document.querySelector("#ticket-quantity").value);
    const userName = document.querySelector("#user-name").value;

    if (ticketQuantity > 0 && userName.trim() !== "") {
        // You can implement ticket booking logic here, such as sending a request to the server.
        // For this example, we'll just show an alert.
        alert(`Success! ${ticketQuantity} ticket(s) booked for ${userName}`);
        bookingForm.reset(); // Clear the form
    } else {
        alert("Please fill in all the required fields.");
    }
});


