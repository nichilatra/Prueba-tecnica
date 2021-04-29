//
const express = require("express");
// rutas
let registro = require("./routes/registro");
let login = require("./routes/login");
let api = require("./routes/api");
//
var bodyParser = require("body-parser");
//
const app = express();
const port = 8500;
app.use(bodyParser.urlencoded({ extended: false }));

///
app.use("/registro", registro);
app.use("/login", login);
app.use("/pruebaniver", api);

app.get("/", (req, res) => {
  res.send("Api prueba tecnica Niver");
});

app.listen(port, () => {
  console.log(`Server on: ${port}.`);
});
