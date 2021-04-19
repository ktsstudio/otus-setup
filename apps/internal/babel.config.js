module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['> 0.25%, not dead']
          }
        }
      ],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
  };
};
