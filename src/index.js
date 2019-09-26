const app = require("./app");
require("./db/mongoose");
const port = 9003;
app.listen(port, () => {
    console.log(`Time tracking application started on port: ${port}`);
});