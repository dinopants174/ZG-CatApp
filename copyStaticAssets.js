var shell = require('shelljs');

shell.mkdir('-p', 'dist/public/src/public');
shell.cp('-R', 'src/public/images', 'dist/public/');
shell.cp('-R', 'src/public/styles', 'dist/public/');
shell.cp('-R', 'src/public/javascripts/lib', 'dist/public/javascripts/');
shell.cp('-R', 'src/public/javascripts', 'dist/public/src/public/');
shell.rm('-rf', 'dist/public/src/public/javascripts/lib');