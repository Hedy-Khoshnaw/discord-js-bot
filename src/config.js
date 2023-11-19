require('dotenv').config();

module.exports = {
    token: process.env.TOKEN || "ODY4NTQ2NTIyOTQwMzEzNjMw.Ga6_-X.xkAa7AXljHjxPJbPj0gXvLQTZHSQflqbB_zXno",  // your bot token
    prefix:  process.env.PREFIX || "!", // bot prefix
    ownerID: process.env.OWNERID || "700971576367251488", //your discord id
    mongourl: process.env.MONGO_URI || "MONGO_URI", // MongoDb URL
    embedColor: process.env.COLOR || 0x303236, // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
}

/** Template by raazdev | https://github.com/chethanyadav456/discord-js-bot */
