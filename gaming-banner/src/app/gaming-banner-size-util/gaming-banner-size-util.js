(() => {
  'use strict';

  window.module.GamingBannerSizeUtil = (() => {
    class GamingBannerSizeUtil {
      static calculateParameters(windowHeight, windowWidth) {
        const windowWidthToWindowHeightRatio = windowWidth / windowHeight;

        let transformScale, width;
        if (windowWidthToWindowHeightRatio <= proportion.minRatio) {
          transformScale = roundScale(windowWidth / widthRange.min);
          width = widthRange.min;
        } else if (windowWidthToWindowHeightRatio >= proportion.maxRatio) {
          transformScale = roundScale(windowHeight / height);
          width = widthRange.max;
        } else {
          width = height * windowWidthToWindowHeightRatio;
          console.log(windowHeight / height === windowWidth / width, windowHeight / height, windowWidth / width);
          transformScale = roundScale(windowHeight / height);
        }

        return {
          height,
          transformScale,
          width,
        };
      }
    }

    const proportion = calculateProportionRange([4, 3], [16, 9]); // `maxRatio: 1.(3), minRatio: 1.(7)`.

    const height = 810;
    const widthRange = {
      max: calculateWidthMax(height), // 1440
      min: calculateWidthMin(height), // 1080
    };

    function calculateProportionRange([minX, minY], [maxX, maxY]) {
      return {
        maxRatio: (1 / maxY) * maxX,
        minRatio: (1 / minY) * minX,
      };
    }

    function calculateWidthMax(height) {
      return height * proportion.maxRatio;
    }

    function calculateWidthMin(height) {
      return height * proportion.minRatio;
    }

    function roundScale(number) {
      const multiplier = 10 ** 4;
      return Math.round(number * multiplier) / multiplier;
    }

    return GamingBannerSizeUtil;
  })();
})();
