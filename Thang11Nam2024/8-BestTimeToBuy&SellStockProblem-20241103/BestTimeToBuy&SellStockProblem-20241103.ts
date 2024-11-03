/*
    Best Time to Buy and Sell Stock Problem
    BestTimeToBuy&SellStockProblem
    Require : Find out best time to buy and sell a stock to
    get max profit

    Problem
    1. Given : An array of int number - each element represent
    stock price at specific day
        You only buy or sell that stock 1 time 
        You must find out max profit can achieve
    
    2. Condition
        - You can't sell if you haven't bought it 
        - Only can do 1 transaction
    
    3. Example
        - You have prices = [7,1,5,3,6,4].
        If you buy stock at monday with price 1 and sell at
        thursday with price 6 - You profit = 6 -1 = 5

    4. Solution
        - The best way to solve is using simple browsing 
        (O(n)) with 2 var
        - minPrice: Save lowest price of stock You have ever
        seen so far
        - maxPrice: Save max profit that you can achieve 
*/

function maxProfit(prices: number[]): number {
    // maxPrice will be max max value at begin
    let minPrice = Infinity
    let maxProfit = 0

    for (const price of prices) {
        // Update value of minPrice if Findout price lower
        // than minPrice
        if (price < minPrice) {
            minPrice = price;
        } else {
            // Update value for maxProfit if finout price higher
            // than current maxProfit
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    // minPrice will find out lowest price for loop see
    // of minPrice can't find out - Turn to maxProfit
    // maxProfit will auto check if new value are better or
    // not If yes save it
    return maxProfit;
}

// Testing function
function testMaxProfit() {
    const testCases = [ // Buy at lowest Sell at highest
        { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
        { prices: [7, 6, 4, 3, 1], expected: 0 },
        { prices: [1, 2, 3, 4, 5], expected: 4 },
        { prices: [5, 4, 3, 2, 1], expected: 0 },
        { prices: [2, 4, 1], expected: 2 },
        { prices: [3, 2, 6, 5, 0, 3], expected: 4 },
    ];

    // for loop with element go through each element of array
    // testcase
    for (const { prices, expected } of testCases) {
        const result = maxProfit(prices);
        //
        console.log(`maxProfit([${prices}]) = ${result}; expected = ${expected}`);
        // Condition console.log
        console.assert(result === expected, `Test failed for prices: ${prices}`);
    }

    console.log("All tests passed!");
}

// Chạy kiểm tra
testMaxProfit();