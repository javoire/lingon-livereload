# Orangejuice Livereload

[![Build Status](https://travis-ci.org/javoire/orangejuice-livereload.png?branch=tests)](https://travis-ci.org/javoire/orangejuice-livereload)
[![Dependency Status](https://david-dm.org/javoire/orangejuice-livereload.png)](https://david-dm.org/javoire/orangejuice-livereload)

This is a basic livereload plugin for [orangejuice](https://github.com/jpettersson/orangejuice). Based on [node-livereload](https://github.com/mnmly/node-livereload).

## Installation

It's not yet been published to the npm repo so for now just clone this repo and place it or link to it from your ```node_modules``` folder.

## Usage

Just include the module from your ```ojfile``` and pass the orangejuice object to it. A basic setup could look like this:
```
#!/usr/bin/env node

var oj = require('orangejuice'),
    livereload = require('orangejuice-livereload');

livereload(oj);

oj.sourcePath = 'source';
oj.buildPath = 'build';
```
Also put the livereload script into you index.html:
```
<body>
    ...
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js"></' + 'script>')</script>
</body>
```
This step will soon be automated and not needed to to manually.

## Configuration

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
