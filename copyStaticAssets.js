var shell = require('shelljs');

shell.cp('-R', 'src/public/images', 'dist/public/');
shell.cp('-R', 'src/public/styles', 'dist/public/');
shell.cp('-R', 'src/public/javascripts/lib', 'dist/public/javascripts/');