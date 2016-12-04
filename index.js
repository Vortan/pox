'use strict';

const convertSentence = require('./convert');
const sentenceToConvert = process.argv[2];

if (!sentenceToConvert) {
  console.log('No sentence to convert.');
} else {
  convertSentence(sentenceToConvert)
  .then(newSentence => {
    console.log(newSentence);
  })
}
