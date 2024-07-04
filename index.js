import dotenv from "dotenv";
import express from "express";
import { Worker } from "worker_threads";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send(process.env.PORT);
});

app.get('/fibonacci', (req, res) => {
    const worker = new Worker('./service.js', {workerData: 40});
    worker.on('message', (resolve) => console.log(resolve));
    res.send('fibonacci called');
})


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
