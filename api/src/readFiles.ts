import fs from "fs";

export default function readFromFile(file: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function (err, data: any) {
      // type this
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}
