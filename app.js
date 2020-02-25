const getAllShopsButton = document.querySelector('.all-shops__button')
const getAllShopsResult = document.querySelector('.get-all__result')

const getSingleShopButton = document.querySelector('.get-single__button')
const updateShopButton = document.querySelector('.update-single__button')
const deleteShopButton = document.querySelector('.delete-single__button')
const createShopButton = document.querySelector('.create-single__button')

const responseList = document.querySelector('.response-data__list')
const responseStatus = document.querySelector('.response-status')

const getSingleByIdInput = document.querySelector('.get-single-input')
const UpdateByIdInput = document.querySelector('.update-by-id-field')

const deleteByIdInput = document.querySelector('.delete-by-id-field')

// get all
getAllShopsButton.addEventListener('click', function() {
  console.log('Get all shops request')
  axios
    .get('http://localhost:3020/api/shops')
    .then(res => {shopOutput(res)})
    .catch(error => console.log(new Error('Error', error))) 
})

// get single
getSingleShopButton.addEventListener('click', function() {
  const shopId = getSingleByIdInput.value
  axios
  .get('http://localhost:3020/api/shops/' + shopId)
  .then(res => {
    const shop = JSON.parse(res.request.response)
    createOutput(shop)
  })
  .catch(error => console.log(new Error('Error', error))) 
})

// update
updateShopButton.addEventListener('click', function() {
  const shopId = UpdateByIdInput.value
  const updateNameInput = document.querySelector('.update-name')
  const updatePostcodeInput = document.querySelector('.update-postcode')
  const updateTownInput = document.querySelector('.update-town')
  const updateTypeInput = document.querySelector('.update-type')

  axios
  .put('http://localhost:3020/api/shops/' + shopId, {
    name: updateNameInput.value,
    type: updateTypeInput.value,
    location: {
      postcode: updatePostcodeInput.value,
      town: updateTownInput.value
    }
  })
  .then(res => {
    console.log(res)
    const shop = JSON.parse(res.request.response)
    createOutput(shop)
  })
  .catch(error => console.log(new Error('Error', error))) 
})

// delete
deleteShopButton.addEventListener('click', function() {
  const shopId = deleteByIdInput.value
  axios
  .delete('http://localhost:3020/api/shops/' + shopId)
  .then(res => {
    responseStatus.innerHTML = `Status: ${res.status}`
    responseList.innerHTML = JSON.parse(res.request.response).message
  })
  .catch(error => console.log(new Error('Error', error))) 
})

// create
createShopButton.addEventListener('click', function() {
  console.log('create shop request');

  const namefield = document.querySelector('.create-name-field')
  const postcodeField = document.querySelector('.create-postcode-field')
  const townField = document.querySelector('.create-town-field')
  const typeField = document.querySelector('.create-type-field')

  axios.post('http://localhost:3020/api/shops', {
    name: namefield.value,
    location: {
      postcode: postcodeField.value,
      town: townField.value
    },
    type: typeField.value
  } )
  .then(res => {
    const shop = JSON.parse(res.request.response)
    createOutput(shop)
  })
  .catch(error => console.log(new Error('Error', error)))
})

function shopOutput(res){
  responseStatus.innerHTML = `Status: ${res.status}`

  let shopName = ''
  let shopLocationPostcode = ''
  let shopLocationTown = ''

  for(const data of res.data){
    console.log(data)
    shopName = data.name
    shopLocationPostcode = data.location.postcode
    shopLocationTown = data.location.town
    createElement('li', `Name: ${shopName}, location: ${shopLocationPostcode}, (${shopLocationTown})`, responseList)
  }
}

function createElement(type, html, parent){
  const newElement = document.createElement(type)
  newElement.innerHTML = html
  parent.appendChild(newElement)
}

function createOutput(object){
  responseStatus.innerHTML = `Status: ${res.status}`
  responseList.innerHTML = `
    <li>Name: ${object.name}</li>
    <li>Town: ${object.location.town}</li>
    <li>Postcode: ${object.location.postcode}</li>
    <li>Type of store: ${object.type}</li>
  `
}