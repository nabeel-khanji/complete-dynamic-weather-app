import express from "express";
import hbs from "hbs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import requests from "requests";
const app = express();
const port = process.env.port || 8000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const publicPath = path.join(__dirname, "public");
const viewPath = path.join(__dirname, "screens/views");
const partialsPath = path.join(__dirname, "screens/partials");
console.log(`${publicPath} \n${viewPath} \n${partialsPath}`);
console.log(__dirname);
app.use(express.static(publicPath));
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);
app.get("", (req, res) => {
  res.render("index", { name: "Nabeel" });
});
app.get("/about", (req, res) => {
  res.render("about", { name: "Nabeel" });
});
app.get("/weather", (req, res) => {
  res.render("weather", { name: "Nabeel" });
});
app.get("*", (req, res) => {
  res.render("error", { name: "Nabeel" });
  // res.writeHead(404)
});
app.listen(port, () => {
  console.log(`listening to the port of ${port}`);
});
