# Orangejuice Livereload

This is a basic livereload plugin for [orangejuice](https://github.com/jpettersson/orangejuice). Based on [node-livereload](https://github.com/mnmly/node-livereload).

## Usage

Just include the module from your ```ojfile```and pass the orangejuice object to it. A basic setup could look like this:
```
#!/usr/bin/env node

var oj = require('orangejuice'),
    livereload = require('orangejuice-livereload');

livereload(oj);

oj.sourcePath = 'source';
oj.buildPath = 'build';
```
A config object can be passed as a second parameter, taking the same options as [node-livereload](https://github.com/mnmly/node-livereload#options) does. Like so:
```
livereload(oj, {
  exts: ['scss', 'coffee']
});
```

## Roadmap

* Automatically inject the livereload browser script in index.html
* Automatically add available file extensions from the source folder for livereload to watch
* Enable css to be injected live. The current integration doesn't support it.

## License

Licensed under the MIT license.
