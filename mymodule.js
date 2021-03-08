/** Import the node file system */
const fs = require("fs");

const path = require("path");

var err = "";
var list = [];

exports.print = function (arg1, arg2, arg3) {
    if (arg1 === "") err = "Directory name error";
    if (arg2 === "") err = "File name error";
    if (arg3 === null) err = "Null callback";
    /** Read a given directory files */
    fs.readdir(arg1, (err, ls) => {
        // if (err) return console.error(err);

        console.log("ls", ls);
        /** Filter the returned file list with the defined extension */
        // list = ls.filter((f) => path.extname(f) === `.${arg2}`);
        ls.filter((f) => path.extname(f) === `.${argv2}`);
    });
    // list.map((f) => console.log(f));
    console.log("callback : " + arg3);
    //return arg3(err, list);
};
