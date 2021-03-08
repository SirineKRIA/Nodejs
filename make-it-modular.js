/** Import tmy module */
const mymodule = require("./mymodule.js");

mymodule.print(process.argv[2], process.argv[3], (err, list) => {
    if (err) console.log(err);
    // else list.map((f) => console.log(f));
    console.log(list);
});
