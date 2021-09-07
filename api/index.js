import express from 'express'
import api from './v1'

const app = express()

app.use(express.json())
app.use(api)

export default app
