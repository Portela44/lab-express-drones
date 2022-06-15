// Iteration #1
const {Schema, model} = require("mongoose");

const droneSchema = new Schema ({
    name: {
        type:String,
        required:true,
        unique:true
    },
    propellers: {
        type:Number,
    },
    maxSpeed: {
        type:Number,
    }
});

const Drone = model("drone", droneSchema);

module.exports = Drone;