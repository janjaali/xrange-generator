const presets = [
  [
    '@babel/preset-env',
    {
      modules: 'umd',
      targets: {
        node: 'current'
      },
    },
  ],
];

module.exports = { presets };
