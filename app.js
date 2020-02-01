const fetch = require('node-fetch')

fetch('http://localhost:3020/shops')
.then((res) => {
  console.log(res.json())
  return res.text()
}).catch((error) => {
  console.error(`Error: ${error}`)
})