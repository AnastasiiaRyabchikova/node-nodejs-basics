import { Worker } from 'node:worker_threads';
import os from 'node:os';

const performCalculations = async () => {
    const cpus = os.cpus();
    const data = await Promise.allSettled(cpus.map((_, index) => (
        new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', {
              workerData: index + 10
            });
            worker.on('message', (data) => resolve({ status: 'resolved', data }));
            worker.on('error', () => reject({ status: 'error', data: null }));
          })
    )));
    console.log(data);
};

await performCalculations();