const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public"));

//apiroute
const apiRoutes = require("./routes/apiroutes");
app.use("/", apiRoutes);

//clientroute
const htmlRoutes = require("./routes/htmlroutes");
app.use("/", htmlRoutes);

//listening to port
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});
