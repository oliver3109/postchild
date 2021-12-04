import bodyParser from "body-parser";
import cors from "cors";
const app = require("express")();

import axios from "axios";

app.use(bodyParser.json());
app.use(cors());

app.all("/proxy", async (req, res) => {
  const { url, method, params, headers, data } = req.body;
  const resultRes = await axios({ url, method, params, data, headers });
  res.json({
    status: resultRes.status,
    data: resultRes.data,
    size: Buffer.from(JSON.stringify(resultRes.data)).length,
  });
});

module.exports = app;
