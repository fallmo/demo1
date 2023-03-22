const { Router } = require("express");
const { connection } = require("mongoose");

const router = Router();

router.get("/version", (req, res) => res.send("version 1.0"));

router.get("/env", (req, res) => res.json(process.env));

router.get("/mongo", async (req, res) => {
  if (connection) return res.send("MongoDB Connected");
  res.send("MongoDB not connected..");
});

router.get("/error", (req, res) => {
  res.status(500).send("Error! Server Crashing");
  console.log("Internal Error Crash!");
  process.exit(1);
});

module.exports = router;
