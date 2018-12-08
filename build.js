const Metalsmith = require('metalsmith')
const layouts = require('metalsmith-layouts')

Metalsmith(__dirname).
  metadata({
    sitename: "Small Util"
  }).
  source('./src').
  destination('./build').
  clean(true).
  use(layouts({
    default: "util.hbs",
    pattern: "**/*.html"
  })).
  build(function(err) {
    if (err) throw err
  })
