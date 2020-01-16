'use strict';

const TEST_DATA = [
    // Тестировать примитивный набор параметров.
    {
        parameters: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7],
        result: 6,
    },

    // Тестировать незакономерный упорядоченный массив, результат на первой итерации.
    {
        parameters: [[0, 23, 175, 312, 509, 856, 4098, 7931, 10000], 509],
        result: 4,
    },

    // Тестировать незакономерный упорядоченный массив, результат на последней итерации.
    {
        parameters: [[0, 23, 175, 312, 509, 856, 4098, 7931, 10000], 856],
        result: 5,
    },

    // Тестировать массивы с дробными значениями.
    {
        parameters: [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 2],
        result: -1,
    },
    {
        parameters: [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0.5],
        result: 4,
    },

    // Тестировать массивы с отрицательными значениями.
    {
        parameters: [[-100, -20, -3, 4, 50], -20],
        result: 1,
    },
    {
        parameters: [[-100, -20, -3, 4, 50], -1],
        result: -1,
    },

    // Тестировать пустой массив.
    {
        parameters: [[], 1],
        result: -1,
    },

    // Тестировать массивы с малым количеством элементов.
    {
        parameters: [[1], 1],
        result: 0,
    },
    {
        parameters: [[1], 10],
        result: -1,
    },
    {
        parameters: [[1, 2], 1],
        result: 0,
    },
    {
        parameters: [[1, 2], 10],
        result: -1,
    },
    {
        parameters: [[1, 2, 3], 1],
        result: 0,
    },
    {
        parameters: [[1, 2, 3], 10],
        result: -1,
    },
];

let failedTestsCount = 0;
TEST_DATA.forEach((data, testIndex) => {
    const testResult = binarySearch.apply(null, data.parameters) === data.result;
    if (!testResult) {
        ++failedTestsCount;
    }
    console.assert(
        testResult,
        'Индекс теста:', testIndex, 'Параметры:', data,
    );
});
console.info('Количество непройденных тестов:', failedTestsCount);
