import express from 'express'
import newsletterRoute from './routes/newsletter'

const api = express()

api.get('/', (req, res) => {
  res.send({
    message: 'Simple Nujek Website API v1.0'
  })
})

api.use('/newsletter', newsletterRoute)

export default api
