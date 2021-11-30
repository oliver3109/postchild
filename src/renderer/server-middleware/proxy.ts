import bodyParser from "body-parser";
const app = require("express")();

import axios from "axios";

app.use(bodyParser.json());

app.all("/proxy", async (req, res) => {
  const { url, method, params, headers } = req.body;
  const resultRes = await axios({ url, method, params, headers });
  res.set("access-control-allow-headers", "*");
  res.set("access-control-allow-origin", "*");
  res.json({
    status: resultRes.status,
    data: resultRes.data,
    size: Buffer.from(JSON.stringify(resultRes.data)).length,
  });
});

module.exports = app;
