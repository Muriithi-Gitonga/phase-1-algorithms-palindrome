function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split("").reverse().join("")

}

/* 
  Add your pseudocode here
  if the word is the same when reversed {
    return True

  } else {
    return false
  }
*/


/*
  Add written explanation of your solution here
  if the word is the same when reversed return true else retuen false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("lab"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
