/*

    CoHieuHonCoNho



    Best Time to Buy and Sell Stock Problem

    Require : Find out biggest profit can do from once of buy and

    sell

    Give you a array represent stock prices at specific day. Find

    out day buy and day sell to maximize profit



    Detail

    1. Declare

    - Use minPrice var to track TheoDoi lowest price we can see

    Will declare minPrice with price very very high to max sure

    each value will be lower when compare with it

    - Use maxProfit var to store max value can see ; declare

    with value = 0

    2. Action

    - Browse array, with each element

        + If less than minPrice - update minPrice

        + Find out profit when have new minPrice - check update

          new value of profit to maxProfit or not

*/



// Demo 1

function BestTimeToBuyAndSellFunction(s: number[]) : number {

  let minPrice = Infinity;

  let maxPrice = 0;

  let maxProfit = 0;



  for (let i = 0; i < s.length; i++) {

      if (s[i] < minPrice) {

          minPrice = s[i]

          maxProfit = Math.max(maxProfit,maxPrice - minPrice)

      }

      maxPrice = s[i]

  }

  return maxProfit

}



function V2BestTimeToBuyAndSellFunction(prices: number[]): number {

  let minPrice = Infinity;

  let maxProfit = 0;

  /* About for of

     - For of loop through object can loop by object represent

     for element in loopable object

  */

  for (let price of prices) {

      if (price < minPrice) {

          minPrice = price

      } else if (price - minPrice > maxProfit) {

          maxProfit = price - minPrice;

      }

  }

  return maxProfit

}







function V3BestProfitWhenBuyAndSellStock(prices: number[]) : number {

  let minPrice = Infinity;

  let maxProfit = 0;

  for (let price of prices) {

      if (price < minPrice) {

          minPrice = price

      } else if (price - minPrice > maxProfit) {

          maxProfit = price - minPrice

      }

  }

  return maxProfit

}



function V4BestProfitWhenBuyAndSellStock(prices: number[]) : number {

  let minPrice = Infinity;

  let maxProfit = 0



  for (let price of prices) {

      if (price < minPrice) {

          minPrice = price

      } else if (price - minPrice > maxProfit) {

          maxProfit = price - minPrice

      }

  }



  return maxProfit

}

function V5BestProfitWhenBuyAndSellStock(prices: number[]) : number {
  let maxProfit = 0
  let minPrice = Infinity

  for (let price of prices) {
    if (price < minPrice) {
        minPrice = price
    } else if (price - minPrice > maxProfit) {
        maxProfit = price - minPrice
    }
  }
  return maxProfit
}





// Test cases

function testMaxProfit() {

  const testCases: { prices: number[], expected: number }[] = [

      { prices: [7, 1, 5, 3, 6, 4], expected: 5 },

      { prices: [7, 6, 4, 3, 1], expected: 0 },

      { prices: [1, 2, 3, 4, 5], expected: 4 },

      { prices: [2, 4, 1], expected: 2 },

      { prices: [3, 3, 5, 0, 0, 3, 1, 4], expected: 4 }

  ];



  testCases.forEach(({ prices, expected }, index) => {

      const result = V5BestProfitWhenBuyAndSellStock(prices);

      console.log(`Test case ${index + 1}:`, result === expected ? 'Passed' : `Failed (Expected ${expected}, got ${result})`);

  });

}



testMaxProfit()