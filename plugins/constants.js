
function plugin() {

  return function (files, metalsmith, done) {
    const gitRef = process.env.GITHUB_SHA

    const metadata = metalsmith.metadata()
    const version = gitRef ? gitRef.substring(0, 8) : undefined

    metadata.const = {
      social: {
        ga: {
          id: 'UA-112748787-9'
        }
      },
      version
    }

    setImmediate(done)

  }

}

module.exports = plugin
