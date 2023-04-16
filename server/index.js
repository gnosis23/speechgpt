import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
const port = 3200;

app.post("/api/v1/chat/completions", (req, res) => {
  console.log(req.body);
  fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: req.get("Authorization")
    },
    body: JSON.stringify(req.body)
  })
    .then(response => response.json())
    .then(json => {
      res.json(json);
    });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
