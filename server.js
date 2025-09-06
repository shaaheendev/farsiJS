import express from "express";
import compiler from "./module/compiler.mjs";
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("./public"));
app.use(express.json());

app.post("/compile", (req, res) => {
  try {
    const code = req.body.code;
    let outputs = compiler(code);
    res.json(outputs);
  } catch (error) {
    console.log(err);
  }
});

app.listen(port, console.log(`listenning on port ${port}`));
