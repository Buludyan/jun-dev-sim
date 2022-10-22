import { writeFileSync } from "fs";

export const writeFile = async () => {
  try {
    writeFileSync("myfile.txt", "the text to write in the file", "utf-8");
  } catch (e) {
    console.log("Failed to save the file !");
  }
};
