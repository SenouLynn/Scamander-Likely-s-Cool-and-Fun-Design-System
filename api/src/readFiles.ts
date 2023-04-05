import fs from "fs";

export default async function readFromFile(file: string) {
  return await new Promise((resolve, reject) => {
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

export const writeToFile = async (path: string, data: any) => {
  // const fileName = path;
  const fileName = "../api/src/assets/testFile.json";
  // let file = require(fileName);
  let file = await readFromFile(fileName);

  //update file with new
  file = data;
  await fs.writeFile(
    fileName,
    JSON.stringify(file),
    async function writeJSON(err) {
      if (err) return console.log(err);
      console.log(JSON.stringify(file, null, 2));
      console.log("writing to " + fileName);
      return true;
    }
  );
};
