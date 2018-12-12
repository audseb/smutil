
function plugin() {

  return function(files, metalsmith, done) {

    const metadata = metalsmith.metadata()
    const buildDate = new Date()

    metadata.buildinfo = {
      rev: Math.floor(buildDate.getTime() / 1000), // replace with content hash?
      date: buildDate.toISOString(),
      user: process.env.USER,
      nodejs: process.version,
      arch: process.arch,
      platform: process.platform
    }

    setImmediate(done)

  }

}

module.exports = plugin
