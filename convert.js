'use strict';

const _ = require('lodash');
const map = require('./maps/english_to_armenian');
const {
  createCompoundLetter
} = require('./utils');

function convertLetter(letter) {
  return _.get(map, letter);
}

function convertLetterOrCompound(letter, nextLetter) {
  const compoundLetter = createCompoundLetter(letter, nextLetter);
  const letterTranslation = convertLetter(letter);
  const compundLetterTranslation = convertLetter(compoundLetter);

  if (compundLetterTranslation) {
    return {
      translation: compundLetterTranslation,
      skip: true
    };
  }

  if (letterTranslation) {
    return {
      translation: letterTranslation,
      skip: false
    };
  }

  return {
    translation: letter,
    skip: false
  };
}

function convertWord(word) {
  let newWord = '';

  for (let index = 0; index < word.length; index++) {
    const letter = word[index];
    const nextLetter = word[index+1];
    const translationObject = convertLetterOrCompound(letter, nextLetter);
    if (translationObject.skip) {
      index++;
    }
    
    newWord += translationObject.translation;
  }

  return newWord;
}

function convertWords(words) {
  let newSentence = '';
  return _.reduce(words, (newSentence, word) => {
    const newWord = convertWord(word);
    return `${newSentence} ${newWord}`
  }, '');
}

function convertSentence(sentence) {
  const words = _.words(sentence);
  const newSentence = convertWords(words);

  return newSentence;
}

module.exports = convertSentence;
