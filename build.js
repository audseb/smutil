const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')

const buildinfo = require('./buildinfo.js')

Metalsmith(__dirname).
  source('./src').
  destination('./build').
  clean(true).
  use(buildinfo()).
  use(collections({
    utils: {
      pattern: ['*', '!index.html'],
      sortBy: 'title'
    }
  })).
  use(layouts({ default: 'util.hbs' })).
  build(function(err, files) {
    if (err) throw err
  })
