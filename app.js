
const K = 22;
const ARR = [10, 15, 18, 24, 38];

let bestMatch = null;
ARR.forEach((item) => {
        if (Math.abs(item - K) < Math.abs(bestMatch - K)) {
            bestMatch = item;
        } 
    });
    

console.log(bestMatch)
