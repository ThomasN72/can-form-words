# Can Form Words

This utility is a TypeScript-based solution for finding all possible valid English words that can be formed by rearranging the letters of a given input string.

## Features

- **Efficient Word Lookup**: Given an input string, the utility identifies all the words that can be formed using the letters of the input.
- **Customizable Word List**: Users can provide their own list of valid English words for the utility to reference.
- **Case Insensitive**: The utility treats all letters as lowercase, making the search case-insensitive.

## How It Works

1. **Letter Counting**: The utility first counts the frequency of each letter in the input string and each word in the word list.
2. **Word Filtering**: It then filters out words from the list that can't be formed using the letters in the input string based on the letter count.
3. **Result**: The output is a list of words that can be formed from the input string.

## Usage

**Running the Code**:
   - Compile the TypeScript file to JavaScript using the TypeScript compiler.
     ```bash
     npx tsc
     ```
   - Run the compiled JavaScript file using Node.js.
     ```bash
     node answer.js
     ```

## Sample Code

```typescript
const ableToFindWord = findWords("oogd", WORDS);
const notAbleToFindWord = findWords("ade", WORDS);

console.log("ableToFindWord", ableToFindWord);
console.log("notAbleToFindWord", notAbleToFindWord);
```

## Output
```bash
ableToFindWord [ 'good', 'god', 'dog', 'goo', 'do', 'go', 'ogd' ]
notAbleToFindWord [ ]
```
