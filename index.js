
const fs = require("fs");
const os = require("os");
const path = require("path");
const url = require('url');
const EventEmitter = require('events')


// -----------------FS MODULE SYNC CODE----------------

// fs.writeFileSync("read.txt","Hello World!")

// fs.appendFileSync("read.txt"," Bye")

// const data = fs.readFileSync("read.txt","utf-8") // we can also write 2nd parameter "utf-8" to convert buffer data to string
// console.log(data.toString())
// console.log(data)

// fs.renameSync("read.txt","readWrite.txt")

// fs.unlinkSync("readWrite.txt") 


// -----------------FS MODULE ASYNC CODE----------------


// fs.writeFile("read.txt", "Hello world!", (err) => {  // Async accept alway callback function
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("File Created")
//     }
// })


// fs.appendFile("read.txt"," Bye!",(err)=>{
//    if(err){
//     console.log(err)
//    }else{
//     console.log("Data Updated")
//    }
// })


// fs.readFile("read.txt","utf-8",(err,data)=>{
//  if(err){
//     console.log(err)
//  }else{
//     console.log(data)
//  }
// })


// fs.rename("read.txt","readWritetxt",(err)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log("Rename File Succefully!")
// }
// })

// fs.unlink("read.txt",(err)=>{
// if(err){
//     console.log(err)
// }else{
//     console.log("Deleted")
// }
// })



// -----------------OS MODULE CODE----------------


// console.log(os.arch())

// console.log(os.hostname())

// console.log(os.platform())

// console.log(os.tmpdir())

// console.log(os.type())

// console.log(os.freemem()) // It give the ans in bytes we need to convert inti number
// const freeMemory = `${os.freemem()/1024/1024/1024} GB`
// console.log(freeMemory)


// console.log(os.totalmem())
// const TotalMemory = `${os.totalmem()/1024/1024/1024} GB`
// console.log(TotalMemory)


// -----------------PATH MODULE CODE----------------

// console.log(path.dirname("C:\Users\dell\Desktop\Node-Js/index.js"))

// console.log(path.extname("C:\Users\dell\Desktop\Node-Js/index.js"))

// console.log(path.basename("C:\Users\dell\Desktop\Node-Js/index.js"))

// console.log(path.parse("C:\Users\dell\Desktop\Node-Js/index.js").name)



// -----------------URL MODULE CODE----------------

// const address = "http://localhost:3000/about/5?name=XYZ&id=1";

// let parsedURL = url.parse(address,true);

// console.log(parsedURL.href)

// console.log(parsedURL.host)

// console.log(parsedURL.hostname)

// console.log(parsedURL.pathname)

// console.log(parsedURL.port)

// console.log(parsedURL.query)


// -----------------URL MODULE CODE----------------

// event module class provide karta hai isko use karne ke hume phle obj mai convert karna padta hai baki module object provide karta hai
// const event = new EventEmitter();

// event.on("greet", () => {
//     console.log("Hello Everyone");
// });

// event.emit("greet");


// -----------------STREAM CODE----------------

// It is not a module In Node.js, streams are an abstract interface for handling streaming data

// const MyStream = fs.createReadStream("read.txt",'utf-8');
// const MyWriteStream = fs.createWriteStream("Write.txt")

// MyStream.on("data", (chunks) => {
//     console.log('Chunk Received!!')
//     MyWriteStream.write(chunks)
// });

// MyStream.emit("data");
