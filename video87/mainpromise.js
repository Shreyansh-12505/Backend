import fs from "fs/promises"
let a =await fs.readFile("shreyansh.txt")
console.log(a.toString());
let b=await fs.writeFile("shreyansh2.txt","hello world")


