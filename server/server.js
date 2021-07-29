// Required Modules
const path = require("path");
const express = require("express");
const fs = require("fs");
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const readAccounts = () => {
    const accounts = fs.readFileSync("./data/accounts.json");
    return JSON.parse(accounts);
};

const accountList = readAccounts();

/** MIDDLEWARE
==================*/
// CORS
app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
}));

// ORIGINS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// GET Call
app.get("/accounts", async (req, res) => {
    try {
        res.status(200).json(JSON.stringify(accountList));
    } catch {
        res.status(404).json("Service is unavailable");
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});