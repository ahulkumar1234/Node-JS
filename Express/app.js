
const { render } = require('ejs');
const express = require('express'); // Just like event module in Node we can use directly the express, so we have to store it in a variable or create a instance of object.
const app = express(); // Stored the express in (app) variable and now we will use (app variable).
const path = require('path')

const router = require('./Router/route')


const port = process.env.PORT || 8000

//Middleware 
// app.use => (It is used when we use the middleware)
// static => (name of the middleware)built-in middleware
//public => Name of the folder which needs to served
app.use(express.static("public"));

// ejs template engine
app.set("view engine", "ejs")

//router middleware use
app.use('/', router)


//middleware
const auth = (req, res, next) => {
    const login = false;
    if (!login) {
        res.send("<h1>login first</h1")
    } else {
        next()
    }
};

//call middlware
// app.use(auth);


//Server create
app.get("/", (req, res) => {
    res.send('<h1> Hello From Home Page </h1>')
    // res.sendStatus(500)
    // res.status(200).send("Everything is running fine")
    // res.json({"name":"Rahul","age":23,"city":"jamshedpur"})
    // res.sendFile(path.resolve(__dirname)+"/index.html")
    // res.download(path.resolve(__dirname) + "/index.html")
    // res.render("index",{
    //     content: "This is my Home page"
    // })
})


// app.get("/about", auth, (req, res) => {
//     res.send("<h1>About page</h1>");
// });

// app.get("/contact", auth, (req, res) => {
//     res.send("<h1>Contact page</h1>");
// });


//ejs template engine
// app.get("/about",(req, res) => {
//     res.render("about",{
//         content:"This is my about page"
//     })
// })



//Server start
app.listen(port, () => {
    console.log(`Your server is runnig on port ${port}`)
})








// app.get('/get', (req, res) => {
//     res.send('GET request');
// });
// app.post('/post', (req, res) => {
//     res.send('POST request');
// });
// app.put('/put', (req, res) => {
//     res.send('PUT request');
// });
// app.delete('/delete', (req, res) => {
//     res.send('DELETE request');
// });


