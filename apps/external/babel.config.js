module.exports = function(api) {
  api.cache(() => process.env.NODE_ENV);
  
  const presets = ['next/babel'];
  
  const plugins = [
    [
      'babel-plugin-styled-components',
      {
        'ssr': true,
        'displayName': true,
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};