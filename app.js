const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
// const mongoose = require("mongoose")

const helmet = require("helmet")


// view engine setup


/** SET ENVIRONMENT */
if(process.env.NODE_ENV === "production") {
    require ('custom-env').env('production')
    console.log("PRODUCTION NEV")
  
  }else if(process.env.NODE_ENV === "staging"){
    require ('custom-env').env('staging')
    console.log("STAGING ENV")
  
  }else{
    require ('custom-env').env('development')
    console.log("DEVELOPMENT ENVIRON")  
  }
  
/** SET ENVIRONMENT */

const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet())
// app.use(cookieParser())



// mongoose
// .connect(process.env.DB, {
//   useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useUnifiedTopology: true ,
//   // useFindAndModify: false,
//   useFindAndModify:false,
//   useUnifiedTopology: true
// })
// .then(() => console.log("Connected to MongoDB..."))
// .catch(err => console.log(err));







if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

if (process.env.NODE_ENV === "staging") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



const {HTTP_HOST, PORT} = process.env
const port = parseInt(process.env.PORT, 10) ||  8888
app.listen(port,() => {
  console.log(`listening on port ${process.env.PORT}`)
})




