var requireDir = require('require-dir');

// automatically require all individual task files
requireDir('gulp/tasks', {recurse: true});