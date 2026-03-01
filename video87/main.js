const fs=require("fs")
// console.log(fs);

console.log('starting');

fs.writeFile("shreyansh.txt","he is a good boy",()=>{
    console.log('done');
    fs.readFile("shreyansh.txt",(error,data)=>{
console.log(error,data.toString());

    })
})
console.log('ending');
