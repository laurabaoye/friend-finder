const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

//apiroute
const apiRoutes = require("./app/routing/apiRoutes.js");
app.use("/", apiRoutes);

//clientroute
const htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use("/", htmlRoutes);

//listening to port
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
