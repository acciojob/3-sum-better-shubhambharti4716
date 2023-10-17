function threeSum(arr, target) {
    let closestSum = arr[0] + arr[1] + arr[2]; // Initialize with the sum of the first three elements

    // Nested loops to consider all possible triplets
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                const currentSum = arr[i] + arr[j] + arr[k];
                if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                    closestSum = currentSum; // Update closestSum if the current sum is closer to the target
                }
            }
        }
    }

    return closestSum;
}

module.exports = threeSum;
