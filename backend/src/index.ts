import express from "express"
import * as dotenv from "dotenv"

dotenv.config()

const { PORT = 4000 } = process.env

const app = express()

app.get('/', (req, res) => {
  res.send("Send from API")
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})