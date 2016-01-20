var remark = require('remark')
var VFile = require('vfile')
var path = require('path')
var tap = require('tap')
var fs = require('fs')

var include = require('../index')
var processor = remark.use(include)

var map = {
  '@include a.md': '# A',
  '@include a': '# A',
  '@include b': '# B',
  '@include sub/sub': '# A\n\n# sub'
}

function transform (lines) {
  return lines
    .map(function (line) { return map[line] || line })
    .filter(function (v) { return !!v })
    .join('\n\n') + '\n'
}

function loadFile (file) {
  var fullpath = path.join(__dirname, file)
  var ext = path.extname(file)
  return new VFile({
    directory: __dirname,
    filename: path.basename(fullpath, ext),
    extension: ext.slice(1),
    contents: fs.readFileSync(fullpath).toString()
  })
}

tap.test('should include by exact path', function (t) {
  var file = loadFile('exact.md')
  t.equal(
    processor.process(file),
    transform(file.contents.split('\n'))
  )
  t.end()
})

tap.test('should include by guessing extension', function (t) {
  var file = loadFile('guess.md')
  t.equal(
    processor.process(file),
    transform(file.contents.split('\n'))
  )
  t.end()
})

tap.test('should include from sub and super paths', function (t) {
  var file = loadFile('super.md')
  t.equal(
    processor.process(file),
    transform(file.contents.split('\n'))
  )
  t.end()
})

tap.test('should fail to include non-existent file', function (t) {
  t.throws(
    function () { processor.process('@include nope.md') },
    'Unable to include ' + path.join(process.cwd(), 'nope.md')
  )
  t.end()
})
