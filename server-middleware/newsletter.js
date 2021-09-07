const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.post('/subscribe', (req, res) => {
  const { email } = req.body
  if (!email) {
    res.status(400).send('Bad Request')
  } else {
    res.status(200).send({ data: { email }})
  }
})

module.exports = app
