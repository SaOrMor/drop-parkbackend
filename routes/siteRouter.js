const express = require("express");
const siteRouter = express.Router();
const envfile = require('envfile');
const fs = require('fs');



siteRouter.get('/park/:licence', (req, res) => {
    
    const licence = req.params.licence;


    const slots = JSON.parse(process.env.SLOTS);
    console.log("slots", slots)
    const keys = Object.keys(slots)
    console.log("keys", keys)
    // getting the key in an array for looping
    let slot;
    // creating empty variable to print the message later on

    // looping over the key and assign the value to the first empty

    for(let i = 0; i < keys.length; i++){
        if(!slots[keys[i]]){
            
            slots[keys[i]] = licence;
            
            slot = keys[i];
            
            break;
        }
    }

    // stringify back the slots and assign to process.env
    process.env.SLOTS = JSON.stringify(slots);

    if(slot){
        res.json(`The car with licence ${licence} is in slot ${slot}`)
    }else{
        res.json("The parking lot is full")
    }
})



siteRouter.get('/slot/:slot', (req, res) => {
    const slot = req.params.slot;

    const slots = JSON.parse(process.env.SLOTS);
    const keys = Object.keys(slots)
    let slotFound;
    for(let i = 0; i < keys.length; i++){
        if(keys[i] === slot){
            slotFound = slots[keys[i]];
        }
    }
    // checking the status of the slot
    if(!slotFound){
        res.json(`slot ${slot} is empty`)
    }else{
        res.json(`slot ${slot} has licence ${slotFound}`)
    }
})





siteRouter.get('/unpark/:licence', (req, res) => {
    
    const licence = req.params.licence;

    const slots = JSON.parse(process.env.SLOTS);
    const keys = Object.keys(slots);
    let slot;

    // checking for the license inside the keys
    // if it is found assign empty string to the object
    for(let i = 0; i < keys.length; i++){
        if(slots[keys[i]] === licence){
            slots[keys[i]] = "";
            slot = keys[i];
        }
    }
    process.env.SLOTS = JSON.stringify(slots)

    if(slot){
        res.json(`The license ${licence} is removed from slot ${slot}`)
    }else{
        res.json(`The license ${licence} is not found`)
    }
})




module.exports = siteRouter;