'use strict';
var test = [];
/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    var date = new Date(2020, 5, 1, 0, 0, seconds);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();
    const formattedDate =
     `${day}.${month}.${year}`;
    return formattedDate;
}

/**'
 * You must create a function that returns a base 2 (binary) representation of 'a base '10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    return decimal.toString(2);
}''
/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    const regex = new RegExp(substring, 'gi');
    const matches = text.match(regex);
    
    return matches ? matches.length : 0;
  }
/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLitters(string) {
    const str =  string.split('').filter((char, index, arr) => arr.indexOf(char) === index).join('');
    return str.split('').map(letter => letter.repeat(2)).join('');

}
/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return function() {return str};
}
const f2 = redundant("pear")

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    return Math.pow(2, disks) - 1;
}
/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;
    if (cols1 !== rows2) {
      throw new Error('The number of columns in the first matrix must be equal to the number of rows in the second matrix.');
    }
  
    const result = new Array(rows1);
    for (let i = 0; i < rows1; i++) {
      result[i] = new Array(cols2);
      for (let j = 0; j < cols2; j++) {
        result[i][j] = 0;
        for (let k = 0; k < cols1; k++) {
          result[i][j] += matrix1[i][k] * matrix2[k][j];
        }
      }
    }
  
    return result;
}
/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let gatheredString = str;
  
    function gatherInner(nextStr) {
      gatheredString += nextStr;
       return gatherInner;
    }
  
    gatherInner.order = function(num) {
      const orderedStrings = gatheredString.split('');
      const orderedResult = [];
      orderedResult.push(orderedStrings[num]);
        
      function orderInner(nextNum) {
        orderedResult.push(orderedStrings[nextNum]);
        return orderInner;
      }
  
      orderInner.get = function() {
        return orderedResult.join('');
      };
  
      return orderInner;
    };
  
    return gatherInner;
  }



test.push("01.06.2021" == secondsToDate(31536000));
test.push(1010 == toBase2Converter(10));
test.push(3 == substringOccurrencesCounter('T', 'test it'));
test.push('HHeelloo' == repeatingLitters('Hello'));
test.push('pear' == f2());
test.push(31 == towerHanoi(5));
test.push('30,36,42,66,81,96,102,126,150' == matrixMultiplication([[1,2,3],[4,5,6],[7,8,9]], [[1,2,3],[4,5,6],[7,8,9]]).toString());
test.push('hello!' == gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());
console.log(test.forEach((k, i)=>console.log(i+1 + " - " + k)))
