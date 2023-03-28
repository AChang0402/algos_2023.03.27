/* 
    Recursive Sigma
    Input: integer
    Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (5+4+3+2+1)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (2+1)

const num3 = -1;
const expected3 = 0;

function recursiveSigma(num, sum=0){
    num = Math.floor(num)
    if(num>0){
        sum+= num;
        return recursiveSigma(num-1, sum);
    }
    return sum
}

// John alternate solution:
function recursiveSigma(num) {
    if (num <= 0) {
      return 0;
    }
    else {
      return Math.floor(num + recursiveSigma(num - 1))
    }
  }
  
  console.log(recursiveSigma(5))



console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))


// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-8 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return