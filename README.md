# remark-include

[![Greenkeeper badge](https://badges.greenkeeper.io/Qard/remark-include.svg)](https://greenkeeper.io/)

With remark-include, you can use @include statements to compose markdown
files together.

## Install

```console
npm install remark-include
```

## Usage

```js
var remark = require('remark')
var include = require('remark-include')

remark().use(include).processSync('@include first.md\n@include second.md').toString()
```

## NOTE

If remark is given string content, it will use process.cwd() as the directory
to resolve the include paths within that content. You can supply the working
directory using `remark.use(include, { cwd: __dirname })`. Alternatively,
you can use [VFiles](http://npmjs.org/package/vfile) rather than strings to
ensure correct path resolution.

---

### Copyright (c) 2016 Stephen Belanger
#### Licensed under MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
