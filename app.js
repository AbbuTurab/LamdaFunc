const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
app.get('/time', (req, res) => {
  let timeNow = Date(Date.now());
  res.status(200).send(timeNow.toString());
});

app.post('/logthis', (req, res)=>{
  const name = req.body.name;
  const toLog = `\n >>> My Name is ${name} <<< \n`
  console.info(toLog);
  res.status(200).send(toLog)
})

// const port = 8000;
// app.listen(port, ()=>{
//   console.log(`Listening on: hhtp://localhost:${port}`);
// })

module.exports = app;
