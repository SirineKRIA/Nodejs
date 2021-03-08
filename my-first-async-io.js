/** Import the node file system */
const fs = require("fs");

/* Read file async */
fs.readFile(process.argv[2], "utf-8", (err, data) => {
    if (err) console.error(err);
    console.log(
        data
            .toString()
            .split("")
            .filter((c) => c === "\n").length
    );
});
