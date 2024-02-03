const findWords = (inputStr, wordList) => {
    const inputCounter = getLetterCount(inputStr);
    return wordList.filter((word) => {
        const wordCounter = getLetterCount(word);
        return canFormWord(inputCounter, wordCounter);
    });
};
const getLetterCount = (str) => {
    // { a: 1, b: 2, c: 3}
    const counter = {};
    for (const char of str) {
        if (!counter[char]) {
            counter[char] = 0;
        }
        counter[char]++;
    }
    return counter;
};
const canFormWord = (inputCounter, wordCounter) => {
    for (const letter in wordCounter) {
        if (wordCounter.hasOwnProperty(letter)) {
            const count = wordCounter[letter];
            if (!inputCounter[letter] || inputCounter[letter] < count) {
                return false;
            }
        }
    }
    return true;
};
// Sample word list
const WORDS = ["good", "god", "dog", "goo", "do", "go", "ogd", "book", "look"];
// Test the function with the example input
const ableToFindWord = findWords("oogd", WORDS);
const notAbleToFindWord = findWords("ade", WORDS);
console.log("ableToFindWord", ableToFindWord);
console.log("notAbleToFindWord", notAbleToFindWord);
