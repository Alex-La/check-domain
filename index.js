const express = require("express");
const path = require("path");

const app = express();
app.get("/mailru-domaindNzorCXbwbEMzsCI.html", (_, res) => {
  res.sendFile(
    path.resolve(__dirname, "public", "mailru-domaindNzorCXbwbEMzsCI.html")
  );
});

app.listen({ port: 80 }, () => {
  "Server ready";
});
