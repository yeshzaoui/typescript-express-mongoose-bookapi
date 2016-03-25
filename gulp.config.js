module.exports = function () {
  var dest = './built/';
  var src = './src/';
  var config = {

    nodemonfig: {
      script: dest + 'index.js',
      ext: 'ts',
      env: {
        PORT: 3000
      },
      ignore: ['./node_modules/**', './typings/**'],
      tasks: ['tsc']
    },

    tsFiles: [src + '**/*.ts','./typings/main.d.ts']

  };

  return config;
};
