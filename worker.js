import { workerData, parentPort } from 'worker_threads';
import fibonacci from './service.js';

const fibonacciAt =  fibonacci(workerData);
parentPort.postMessage(fibonacciAt);