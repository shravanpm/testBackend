const app = require("./index");
const connect = require("./configs/db");

const port = 5000;

app.listen(process.env.PORT || port, async() => {
    try {
        await connect();
        console.log("Listening on port 5000");
    } catch(err) {
        console.log(err);
    }
});