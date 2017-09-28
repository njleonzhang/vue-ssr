const server = require('express')()
const {createBundleRenderer} = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')

const template = fs.readFileSync(path.resolve('./src/index.template.html'), 'utf-8')

function createRenderer (bundle, options = {}) {
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    runInNewContext: false
  }))
}

server.get('*', (req, res) => {
  const bundle = fs.readFileSync(path.resolve('./dist/bundle.server.js'), 'utf8')
  const renderer = createRenderer(bundle)
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err.message)
      console.log(err.stack)
    }

    res.end(html)
  })
})

const port = process.env.PORT || 8080

server.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
