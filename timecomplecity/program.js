// console.log("This is program.js");

// // function estimateTimeComplexity(sizes, times) {
// //     let slope = 0;
// //     let intercept = 0;
// //     let n = sizes.length;

// //     let logSizes = [];
// //     let logTimes = [];
// //     for (let i = 0; i < n; i++) {
// //         logSizes[i] = Math.log(sizes[i]);
// //         logTimes[i] = Math.log(times[i]);
// //     }

// //     let sumX = 0;
// //     let sumY = 0;
// //     let sumXY = 0;
// //     let sumX2 = 0;
// //     for (let i = 0; i < n; i++) {
// //         sumX += logSizes[i];
// //         sumY += logTimes[i];
// //         sumXY += logSizes[i] * logTimes[i];
// //         sumX2 += logSizes[i] * logSizes[i];
// //     }

// //     slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
// //     intercept = (sumY - slope * sumX) / n;

// //     if (slope === 1.0) {
// //         return "O(n)";
// //     } else if (slope === 2.0) {
// //         return "O(n^2)";
// //     } else {
// //         return "O(1)";
// //     }
// // }

// // let sizes = [1, 10, 100, 1000];
// // let times = [0.1, 1, 10, 100];
// // let timeComplexity = estimateTimeComplexity(sizes, times);
// // console.log("Time Complexity:", timeComplexity);



// // function countOperations(n) {
// //     let operations = 0;
// //     for (let i = 1; i <= n; i++) {
// //         operations++; // operation 1
// //         for (let j = 1; j <= n; j++) {
// //             operations++; // operation 2
// //         }
// //     }
// //     return operations;
// // }

// // const inputSizes = [10, 100, 1000, 10000, 100000, 1000000];
// // for (let n of inputSizes) {
// //     const operations = countOperations(n);
// //     console.log("Input size:", n, "Operations:", operations, "Time complexity: O(n^2)");
// // }

// // function timeComplexity(func, inputs) {
// //     let start = new Date();
// //     func(...inputs);
// //     let end = new Date();
// //     return end - start;
// // }

// // console.log("Time complexity:", timeComplexity(exampleFunction, [100000]));
// // function timeComplexity(func, inputs) {
// //     let start = performance.now();
// //     func(...inputs);
// //     let end = performance.now();
// //     let elapsedTime = end - start;
// //     let n = inputs[0];
// //     let logN = Math.log2(n);
// //     if (elapsedTime <= logN) {
// //         return "O(log n)";
// //     } else if (elapsedTime <= n) {
// //         return "O(n)";
// //     } else if (elapsedTime <= n * logN) {
// //         return "O(n log n)";
// //     } 
// // }

// // function exampleFunction(n) {
// //     let result = 0;
// //     for (let i = 0; i < n; i++) {
// //         result += i;
// //     }
// //     return result;
// // }

// // console.log("Time complexity:", timeComplexity(exampleFunction, [100000]));

// function timeComplexity(func, inputs) {
//     let start = performance.now();
//     func(...inputs);
//     let end = performance.now();
//     let elapsedTime = end - start;
//     let n = inputs[0];
//     let logN = Math.log2(n);
//     if (elapsedTime <= 1) {
//         return "O(1)";
//     } else if (elapsedTime <= n) {
//         return "O(n)";
//     } else if (elapsedTime <= n * logN) {
//         return "O(n log n)";
//     } 
// }

// console.log("Time complexity:", timeComplexity(exampleFunction, [100000]));

