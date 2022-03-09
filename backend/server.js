const app = require("./index");
const port = 5000;
const connect = require("./configs/db");

app.listen(port, async () => {
    await connect();
    console.log(`Connected to port: ${port}`);
})