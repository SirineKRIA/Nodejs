/** Import the node file system */
const fs = require("fs");

const path = require("path");

/** Read a given directory files */
fs.readdir(process.argv[2], (err, list) => {
    if (err) console.error(err);
    /** Filter the returned file list with the defined extension */
    list.filter((f) => path.extname(f) === `.${process.argv[3]}`).map((f) =>
        console.log(f)
    );
});
