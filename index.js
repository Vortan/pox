'use strict';

const convertSentence = require('./convert');
const sentenceToConvert = process.argv[2];

if (!sentenceToConvert) {
  console.log('No sentence to convert.');
} else {
  const newSentence = convertSentence(sentenceToConvert);
  console.log(newSentence);
}
