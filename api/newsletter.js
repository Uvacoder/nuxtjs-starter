const express = require('express')

const app = express()
app.use(express.json())
app.post('/api/v1/newsletter/subscribe', (req, res) => {
  const { email } = req.body
  if (!email) {
    res.status(400).send('Bad Request')
  } else {
    res.status(200).send({ data: { email }})
  }
})

module.exports = app
