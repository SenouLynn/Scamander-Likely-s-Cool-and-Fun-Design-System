const fs = require("fs");

const fileName = "./file.json";
const file = require(fileName);
file.key = "new value";
//pass key and value, along with file path
export default function readFromFile() {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err: any) {
      if (err) {
        console.log(err);
        return reject(err);
      } else {
        console.log("writing to " + fileName);
        console.log(JSON.stringify(file, null, 2));
        resolve(JSON.stringify({ success: true }));
      }
    });
  });
}
