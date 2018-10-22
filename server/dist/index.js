"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const port = process.env.PORT || 3000;
app_1.default.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`The server is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map