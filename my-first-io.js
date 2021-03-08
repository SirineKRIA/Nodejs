const fs = require("fs");

/* Read file data */
let data = fs.readFileSync(process.argv[2], "utf-8", "wc");

/* Print lines number in the read file */
console.log(data.split("").filter((c) => c === "\n").length);
