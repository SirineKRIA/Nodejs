/** Import tmy module */
const mymodule = require("./mymodule.js");

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, function (err, files) {
    /**Display error */
    if (err) {
        return console.error("error:", err);
    }
    /**Prints the filtered directory files  */
    files.map((file) => console.log(file));
});
