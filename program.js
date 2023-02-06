console.log("This is program.js");

function estimateTimeComplexity(sizes, times) {
    let slope = 0;
    let intercept = 0;
    let n = sizes.length;

    let logSizes = [];
    let logTimes = [];
    for (let i = 0; i < n; i++) {
        logSizes[i] = Math.log(sizes[i]);
        logTimes[i] = Math.log(times[i]);
    }

    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;
    for (let i = 0; i < n; i++) {
        sumX += logSizes[i];
        sumY += logTimes[i];
        sumXY += logSizes[i] * logTimes[i];
        sumX2 += logSizes[i] * logSizes[i];
    }

    slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    intercept = (sumY - slope * sumX) / n;

    if (slope === 1.0) {
        return "O(n)";
    } else if (slope === 2.0) {
        return "O(n^2)";
    } else {
        return "O(1)";
    }
}

let sizes = [1, 10, 100, 1000];
let times = [0.1, 1, 10, 100];
let timeComplexity = estimateTimeComplexity(sizes, times);
console.log("Time Complexity:", timeComplexity);





