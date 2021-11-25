import bodyParser from "body-parser";
const app = require("express")();

import axios from "axios";

app.use(bodyParser.json());

app.all("/proxy", async (req, res) => {
  const { url, method, params } = req.body;
  const resultRes = await axios({ url, method, params });
  res.json(resultRes.data);
});

module.exports = app;
