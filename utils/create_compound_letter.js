'use strict';

function createCompoundLetter(letter, nextLetter) {
  if (nextLetter) {
    return `${letter}${nextLetter}`;
  }

  return undefined;
}

module.exports = createCompoundLetter;
