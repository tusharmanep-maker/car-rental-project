// Array of cars
const cars = [
    {
        name: "Toyota Corolla",
        image: "https://via.placeholder.com/250x150?text=Toyota+Corolla",
        pricePerDay: 50,
        seats: 5,
        transmission: "Automatic",
        fuel: "Petrol"
    },
    {
        name: "Honda Civic",
        image: "https://via.placeholder.com/250x150?text=Honda+Civic",
        pricePerDay: 60,
        seats: 5,
        transmission: "Manual",
        fuel: "Petrol"
    },
    {
        name: "BMW X5",
        image: "https://via.placeholder.com/250x150?text=BMW+X5",
        pricePerDay: 120,
        seats: 7,
        transmission: "Automatic",
        fuel: "Diesel"
    }
];

// Function to display cars
const carContainer = document.getElementById("carContainer");

cars.forEach(car => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h2>${car.name}</h2>
        <p>Seats: ${car.seats}</p>
        <p>Transmission: ${car.transmission}</p>
        <p>Fuel: ${car.fuel}</p>
        <p>Price per day: $${car.pricePerDay}</p>
        <button onclick="bookCar('${car.name}', ${car.pricePerDay})">Book Now</button>
    `;

    carContainer.appendChild(carCard);
});

// Function to handle booking
function bookCar(name, price) {
    // You can replace this with WhatsApp message link or payment integration
    alert(`You selected ${name} for $${price} per day. Proceed to booking.`);
}



