## Worker threads in nodeJs

`index.js`
```js
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
```


`service.js`
```js
import { workerData, parentPort } from 'worker_threads';

function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

const fibonacciAt =  fibonacci(workerData);
parentPort.postMessage(fibonacciAt);
```


---

### Run the project:

* clone the project

    ```$ git clone git@github.com:Saqib29/worker_threads-nodejs.git```
* go to the directory

    `$ cd worker_threads-nodejs/`
* install dependency packages

    `$ npm install`

* create .env file and set PORT

    `port=3000`
* start the server

    `$ npm run start`