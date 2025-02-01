(() => {
  'use strict';

  // # Modules: `import` emulation

  const { GamingBannerSizeUtil } = window.module;

  // # Tests

  testCalculateParameters(
    'Case 1',
    [810, 540],
    {
      height: 810,
      transformScale: 0.5,
      width: 1080,
    },
  );

  testCalculateParameters(
    'Case 2',
    [810, 1080],
    {
      height: 810,
      transformScale: 1,
      width: 1080,
    },
  );

  testCalculateParameters(
    'Case 3',
    [810, 1440],
    {
      height: 810,
      transformScale: 1,
      width: 1440,
    },
  );

  testCalculateParameters(
    'Case 4',
    [810, 2000],
    {
      height: 810,
      transformScale: 1,
      width: 1440,
    },
  );

  testCalculateParameters(
    'Case 5',
    [810, 1000],
    {
      height: 810,
      transformScale: 0.9259,
      width: 1080,
    },
  );

  // # Test function

  function testCalculateParameters(
    message,
    parameters,
    expected
  ) {
    const {
      height,
      transformScale,
      width
    } = GamingBannerSizeUtil.calculateParameters.apply(null, parameters);
    const condition = height === expected.height && transformScale === expected.transformScale && width === expected.width
    console.assert(
      condition,
      { message, parameters },
      'expected:',
      expected,
      'result:',
      {
        height,
        transformScale,
        width
      }
    );
  }
})();
