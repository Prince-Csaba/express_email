const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World of Node online!')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})