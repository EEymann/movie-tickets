//business logic
function Ticket(title, time, age) {
  this.userTitle = title;
  this.userTime = time;
  this.userAge = age;
}

Ticket.prototype.calculatorPrice = function() {
  var ticketPrice = 0;
  if (this.userMovie === "Toy Story 4") {
    ticketPrice += 3; {
    } else if (this.userMovie === "Anabel Comes Home")
    ticketPrice += 2;
  } else {
    ticketPrice += 1;
  }
  if (this.userTime === "Morning Matinee") {
    ticketPrice += 1;
  } else if (this.userTime === "Afternoon Matinee") {
    ticketPrice += 2;
  } else {
    ticketPrice += 15;
  }
  if (this.userAge === "Child" || this.userAge === "senior") {
    ticketPrice += 1;
  } else {
    ticketPrice += 5;
  }
  return ticketPrice;
}