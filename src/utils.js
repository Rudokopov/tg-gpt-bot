import { unlink } from "fs/promises";

export async function removeFile(path) {
  await unlink(path);
  try {
  } catch (err) {
    console.log("Error while removing file", err.message);
  }
}
