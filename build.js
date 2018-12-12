const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')

Metalsmith(__dirname).
  source('./src').
  destination('./build').
  clean(true).
  use(collections({ utils: { pattern: ['*', '!index.html'] }})).
  use(layouts({ default: "util.hbs" })).
  build(function(err, files) {
    if (err) throw err
  })
