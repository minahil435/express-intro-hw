const express = require("express");
const logger = require("morgan");
const path = require("path");

//server starts
const app = express();

//middleware
app.use(logger("dev"));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (request, response) {
    // response.render("index"); //serve me a file called "index". It will search the views directory for this
    response.render("index", {
        user: "Minahil",
        funFacts: [{ funFact: "I still cant ride bicycle" }, { funFact: "My favorite comfort food is oatmeal" }, { funFact: "One thing I’m very afraid of is sea" }],
    });
});

app.get("/photo-fun", function (request, response) {
    response.render("photos")
});

app.get("/:pet/:age", function (request, response) {
    response.render("pets", {
        name: request.params.pet,
        age: request.params.age,
    });
})

app.listen(3000, function () {
    console.log(`Server is runnong on PORT: ${3000}`);
});


