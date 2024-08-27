const fs = require("fs");
const { title } = require("process");
const { v4: uuidv4 } = require('uuid');
const { sql } = require("./config/database")
const {  app } = require("./config/basic")

const content = fs.readFileSync("categories.json", "utf-8");
const categories = JSON.parse(content);

async function createNewcategory(form) {
    const id = uuidv4();
    form.id = id;
    categories.push(form);
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    return id;
}

app.get("/categories", (req, res) => {
    res.json(categories); ƒƒ
});

app.get("/categories/:id", (req, res) => {
    const { id } = req.params;
    fs.writeFileSync("categories.json", JSON.stringify(categories))
    const category = categories.find(cat.id === id);
    res.json(category);
});

app.post("/categories", async (req, res) => {
    const { name } = req.body;
    const id = await createNewcategory({ name });
    res.status(201).json({ id });
});

app.put("/categories/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ message: "`Name` field is required" });
        return;
    }
    const index = categories.findINdex((cat) => cat.id === id);
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json(["Success"]);
});

app.delete("/categories/:id", (req, res) => {
    const { id } = req.params
    const deleteIndex = categories.findIndex((cat) => cat.id === id);

    console.log("deleteIndex", deleteIndex)

    if (deleteIndex < 0) {
        res.sendStatus(404);
        return;
    }

    categories = categories.filter((cat) => cat.id !== id);
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.sendStatus(204);
})

app.post("/dbtest", async (req, res) => {
    const result = await sql`select versionnode`;
    console.log(result);
    res.json({ result })
});


// const categories = [
//     {
//         name: "name"
//     }
// ];

// app.get("categories/list", (req, res) => {
//     res.json(categories)
// });

// app.get("categories/create", (req, res) => {
//     const { name } = req.query;
//     categories.push({ name: name });

//     fs.writeFileSync("categories.json", JSON.stringify(categories));

//     res.json(["Success"])
// })

// app.get("/categories/create", (req, res) => {
//     res.json(["Success"])
// })