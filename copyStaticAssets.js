var shell = require('shelljs');

// uncomment to make source map work in Edge DevTools
shell.mkdir('-p', 'dist/public/src/public');

shell.cp('-R', 'src/public/images', 'dist/public/');
shell.cp('-R', 'src/public/styles', 'dist/public/');
shell.cp('-R', 'src/public/javascripts/lib', 'dist/public/javascripts/');

// uncomment to make source map work in Edge DevTools
shell.cp('-R', 'src/public/javascripts', 'dist/public/src/public/');
shell.rm('-rf', 'dist/public/src/public/javascripts/lib');