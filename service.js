import { workerData, parentPort } from 'worker_threads';

function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

const fibonacciAt =  fibonacci(workerData);
parentPort.postMessage(fibonacciAt);
