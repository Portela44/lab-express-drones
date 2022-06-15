// Iteration #1
const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];

const mongoose = require ("mongoose");
const Drone = require ("../models/Drone.model");

const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose.connect(MONGO_URI)
    .then(x => console.log(`Connected to ${x.connection.name}`))
    .then(() => {
        return Drone.create()
    })
    .catch(err => console.log(err))
    .finally(() => {
        mongoose.connection.close();
    });