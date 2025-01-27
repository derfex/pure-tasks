(() => {
  'use strict';

  window.module.Anagram = (() => {
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
      const normalizedMap1 = normalizeTextToMap(text1);
      const normalizedMap2 = normalizeTextToMap(text2);

      if (normalizedMap1.size !== normalizedMap2.size) return false;

      for (const [key, value] of normalizedMap1) {
        if (normalizedMap2.get(key) !== value) {
          return false;
        }
      }

      return true;
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
     * Generate a `Map` object with symbols as keys and quantities as values.
     * @param {string} text — a text for normalization.
     * @returns {ReadonlyMap<string, number>}
     */
    function normalizeTextToMap(text) {
      const charactersMap = new Map();

      for (const char of text) {
        const normalizedChar = char.toLowerCase();
        if (!allowedSymbolsSet.has(normalizedChar)) continue;

        const count = charactersMap.get(normalizedChar);
        if (count) {
          charactersMap.set(normalizedChar, count + 1);
        } else {
          charactersMap.set(normalizedChar, 1);
        }
      }

      return charactersMap;
    }

    return Anagram;
  })();
})();
