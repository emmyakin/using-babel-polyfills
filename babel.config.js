module.exports = function (api) {
    api.cache(true);
  
    return {
      presets: [
        '@babel/preset-typescript',
        '@babel/preset-react',
        [
          '@babel/preset-env',
          {
            modules: false,
            debug: true,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        [
          '@babel/plugin-transform-runtime',
          {
            version: require('@babel/helpers/package.json').version,
          },
        ],
        [
          'polyfill-corejs3',
          {
            method: 'usage-pure',
          },
        ],
        ['polyfill-regenerator', { method: 'usage-pure' }],
      ],
      env: {
        cjs: {
          presets: [
            [
              '@babel/preset-env',
              {
                modules: 'commonjs',
                debug: true,
              },
            ],
          ],
        },
      },
    };
  };
  