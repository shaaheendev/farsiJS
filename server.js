import express from "express";
import compiler from "./module/compiler.mjs";
const app = express();

const port = 5000;

app.use(express.static("./public"));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/compile", (req, res) => {
  try {
    const code = req.body.code;
    //console.log(code);
    let outputs = compiler(code);
    //console.log(outputs);
    res.json(outputs);
    // res.send(code);
  } catch (error) {
    console.log(err);
  }
});

app.listen(5000, console.log(`listenning on port ${port}`));

