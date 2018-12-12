
function plugin() {

  return function(files, metalsmith, done) {

    const metadata = metalsmith.metadata()

    metadata.const = {
      social: {
        ga: {
          id: 'UA-112748787-9'
        }
      }
    }

    setImmediate(done)

  }

}

module.exports = plugin
