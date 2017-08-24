(function () {
    var options = {}
    process.argv.forEach(function (val, idx, arr) {
      var matches = val.match(/^envappyaml_config_(.+)=(.+)/)
      if (matches) {
        options[matches[1]] = matches[2]
      }
    })

    require('./lib/index').config(options)
  })()
