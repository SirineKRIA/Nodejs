/** Import the node file system */
const fs = require("fs");

/** Import the path */
const path = require("path");

module.exports = function (directory, extension, callback) {
    /** Read a given directory files */
    fs.readdir(directory, (err, filteredFile) => {
        if (err) return callback(err);
        /** Filter the returned file list with the defined extension */
        filteredFile = filteredFile.filter(
            (f) => path.extname(f) === `.${extension}`
        );
        /**Execute the callback */
        return callback(null, filteredFile);
    });
};
