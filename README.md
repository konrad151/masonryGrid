# masonryGrid

Responsive masonryGrid is a library which takes images from '#masonry-grid-images' and render them into '.masonry-grid-gallery' columns.

## Open project
Simply open index.html file, dist files are already builded.

## Gulpfile configuration
Gulp is watching your JS files from src/js/*.js and LESS files from src/less/*.less,<br />
every saved change will be compiled into dist directory.<br /><br />
This configuration contains:
### JS:
- compile ES6 (babelify)
- modules support (browserify)
- minify JavaScript (uglify)
### LESS:
- concat
- compile to CSS
- minify CSS

## How to work with this project
If you want to make some changes go to project root directory:<br /><br />
In terminal write:
```
$ npm install
```
and after that:

```
$ npm run start
```