const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const robots = require('metalsmith-robots')
const sitemap = require('metalsmith-sitemap')

const DOMAIN = 'https://smutil.com'
const SITEMAP = 'sitemap.xml'
const buildinfo = require('./buildinfo.js')

Metalsmith(__dirname).
  source('./src').
  destination('./build').
  clean(true).
  use(buildinfo()).
  use(sitemap({
    hostname: DOMAIN,
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 1.0,
    omitIndex: true,
    output: SITEMAP
  })).
  use(robots({
    useragent: '*',
    allow: ['*'],
    disallow: [],
    sitemap: `${DOMAIN}/${SITEMAP}`
  })).
  use(collections({
    utils: {
      pattern: ['*.html', '!index.html'],
      sortBy: 'title'
    }
  })).
  use(layouts({
    default: 'util.hbs',
    pattern: '**/*.html'
  })).
  build(function(err, files) {
    if (err) throw err
  })
