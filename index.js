const express = require("express");
const { errorHandler } = require("./src/middlewares/error.middleware");
const AGRoutes = require("./src/routers/activity-group.router");
const todoRoutes = require("./src/routers/todo.router");
const shell = require("shelljs");

shell.exec("sequelize-cli db:migrate");

const app = express();
const port = 3030;
const host = "0.0.0.0";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(AGRoutes);
app.use(todoRoutes);

app.use(errorHandler);

app.listen(port, host, () => {
    console.log(`server listening at http://${host}:${port}`);
});
