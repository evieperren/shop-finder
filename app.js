const axios = require('axios')
let shopContainer = document.querySelector('.shop-container') // error: document is not defined
// returning all shops
axios.get('/shops')
  .then((res) => {console.log(res)})
  .catch((err) => {console.log(`Error: ${err}`)})
  .finally((res) => {
    shopContainer.appendChild(res)
  })

