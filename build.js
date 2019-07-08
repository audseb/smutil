const Metalsmith = require('metalsmith')
const collections = require('metalsmith-collections')
const layouts = require('metalsmith-layouts')
const robots = require('metalsmith-robots')
const sitemap = require('metalsmith-sitemap')
const watch = require('metalsmith-watch')
const metalsmithExpress = require('metalsmith-express')

const DOMAIN = 'https://smutil.com'
const SITEMAP = 'sitemap.xml'

const buildinfo = require('./plugins/buildinfo.js')
const constants = require('./plugins/constants.js')

const SRC_DIR = 'src'
const M = Metalsmith(__dirname).
  source(`./${SRC_DIR}`).
  destination('./build').
  clean(true).
  use(buildinfo()).
  use(constants()).
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
  }))

if (process.env.SERVE) {
  const host = 'localhost'
  const port = 3003

  console.log(`  >> serving content on ${host}:${port}`)
  M.use(metalsmithExpress({
    host,
    port
  })).use(watch({
    livereload: true,
    paths: {
      [`${SRC_DIR}/**/*`]: true
    }
  }))
}

M.build(function(err, files) {
  if (err) throw err
})
