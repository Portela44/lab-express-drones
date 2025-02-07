const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require("../models/Drone.model");

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find({});
    console.log(drones);
    res.render("drones/list", {drones});
  } catch (error) {
    console.log(error);
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    res.render("drones/create-form");
  } catch (error) {
    console.log(error);
  }
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  try {
    await Drone.create({name, propellers, maxSpeed});
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  try {
    const droneFromDB = await Drone.findById(id);
    res.render("drones/update-form", {droneFromDB});
  } catch (error) {
    console.log(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;
  const {name, propellers, maxSpeed} = req.body;
  try {
    await Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed});
    res.redirect("/drones");
  } catch (error) {
    console.log(error);
  }
});

router.post('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
