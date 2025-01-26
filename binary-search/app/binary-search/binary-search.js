'use strict';

/**
 * Получить индекс элемента с искомым значением в массиве методом бинарного поиска.
 * Массив должен содержать множество десятичных чисел, отсортированных по возрастанию.
 * @param {number[]} haystack — целевой массив.
 * @param {number} needle — искомое значение.
 * @returns {number} — индекс элемента с искомым значением в целевом массиве.
 */
function binarySearch(haystack, needle) {
    let start = 0;
    let end = haystack.length - 1;
    do {
        // Получить серединный индекс методом защиты от переполнения.
        const middle = Math.floor((start + (end - start) / 2));
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
    return haystack[end] === needle
        ? end
        : haystack[start] === needle
            ? start
            : -1;
}
