(() => {
  'use strict';

  // # Modules: `import` emulation
  const { BinarySearch } = window.module.Search;

  // # Configuration
  const testCases = [
    // Test a primitive set of parameters.
    {
      parameters: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7],
      result: 6,
    },

    // Test an irregular sorted array, result on the first iteration.
    {
      parameters: [[0, 23, 175, 312, 509, 856, 4098, 7931, 10000], 509],
      result: 4,
    },

    // Test an irregular sorted array, result on the last iteration.
    {
      parameters: [[0, 23, 175, 312, 509, 856, 4098, 7931, 10000], 856],
      result: 5,
    },

    // Test arrays with fractional values.
    {
      parameters: [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 2],
      result: -1,
    },
    {
      parameters: [[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0.5],
      result: 4,
    },

    // Test arrays with negative values.
    {
      parameters: [[-100, -20, -3, 4, 50], -20],
      result: 1,
    },
    {
      parameters: [[-100, -20, -3, 4, 50], -1],
      result: -1,
    },

    // Test arrays with negative values.
    {
      parameters: [[], 1],
      result: -1,
    },

    // Test arrays with a small number of elements.
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

  // # Run the tests
  let failedTestsCount = 0;
  testCases.forEach((data, testIndex) => {
    const testResult = BinarySearch.findIndex.apply(null, data.parameters) === data.result;
    if (!testResult) {
      ++failedTestsCount;
    }
    console.assert(testResult, 'Test index:', testIndex, 'Parameters:', data);
  });
  console.info('Number of failed tests:', failedTestsCount);
})();
