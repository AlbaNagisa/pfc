const fs = require('fs')
const express = require('express')
const app = express()
const PORT = 3000 || process.env.PORT
    
app.use("/static", express.static('./public/'));

app.get('/', (req, res) => {
    
    return res.status(200).end(fs.readFileSync('./index.html', {encoding: 'utf-8'}));
})

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`)
})

