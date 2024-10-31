/*
October 29, 2024

https://medium.com/siliconwat/algorithms-in-javascript-b0bed68f4038

Given a string of characters, return the character that appears the most often.

describe("Max Character", () => {
 it("Should return max character", () => {
  assert.equal(max("Hello World!"), "l");
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 
*/

function maxCharacter(str) {
    //map + count + maxChar
    let charMap = {},
        count = 0,
        maxChar = null

    //map for chars in str + freq
    for (const char of str) {
        charMap[char] = charMap[char] + 1 || 1
    }
    //loop and find most freq char
    for (const char in charMap) {
        if (charMap[char] > count) {
            count = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxCharacter('Hello World!'), 'l')
console.log(maxCharacter('door'), "o")
console.log(maxCharacter('Keyless Entry'), 'e')