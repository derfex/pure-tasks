(function () {
  'use strict';

  window.module.Search = (function () {
    class BinarySearch {
      /**
       * Find the index of the element `needle` with the desired value in the array using the binary search method.
       * The array `haystack` must contain a set of decimal numbers sorted in ascending order.
       * @param {readonly number[]} haystack — target array.
       * @param {number} needle — desired value.
       * @returns {number} — index of the element with the desired value in the target array.
       */
      static findIndex(haystack, needle) {
        let start = 0;
        let end = haystack.length - 1;
        do {
          // Get the median index using overflow protection method.
          const middle = Math.floor(start + (end - start) / 2);
          const value = haystack[middle];
          if (value === needle) {
            return middle;
          }
          if (value < needle) {
            start = middle;
          } else {
            end = middle;
          }
        } while (end - start > 1);
        return haystack[end] === needle ? end : haystack[start] === needle ? start : -1;
      }
    }

    const Search = Object.create(null);
    Search.BinarySearch = BinarySearch;
    return Search;
  })();
})();
