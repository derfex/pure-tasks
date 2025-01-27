(() => {
  'use strict';

  window.module.AnagramNonOptimized = (() => {
    /**
     * A set of functions for checking if two texts are anagrams of each other.
     */
    const Anagram = Object.create(null);

    /**
     * Check if two texts are anagrams of each other.
     * @param {string} text1 — the first text to comparison.
     * @param {string} text2 — the second text to comparison.
     * @returns {boolean}
     */
    Anagram.checkIfTextsAreAnagrams = (text1, text2) => {
      const normalizedText1 = normalizeText(text1);
      const normalizedText2 = normalizeText(text2);
      return normalizedText1 === normalizedText2;
    };

    const allowedSymbolsSet = (() => {
      const countOfLetters = 26;
      const start = 'a'.charCodeAt(0);
      const end = start + countOfLetters;
      const set = new Set();
      for (let i = start; i < end; i++) {
        set.add(String.fromCharCode(i));
      }
      return set;
    })();

    /**
     * Generate a text with sorted allowed symbols.
     * @param {string} text — a text for normalization.
     * @returns {string}
     */
    function normalizeText(text) {
      return text
        .split('')
        .map((symbol) => symbol.toLowerCase())
        .filter((symbol) => allowedSymbolsSet.has(symbol))
        .sort()
        .join('');
    }

    return Anagram;
  })();
})();
