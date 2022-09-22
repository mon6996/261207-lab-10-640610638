import fs from 'fs';

export function readDB() {
  const str = fs.readFileSync("db/chatroom.json", { encoding: "utf-8" });
  const chatroom = JSON.parse(str);
  return chatroom;
}

export function writeDB(chatroom) {
  const str = JSON.stringify(chatroom);
  fs.writeFileSync("db/chatroom.json", str, { encoding: "utf-8" });
}
