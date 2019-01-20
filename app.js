const express = require('express')
const app = express()
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000
const ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost'

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, ip)
console.log('Server running on http://%s:%s', ip, port)

module.exports = app
