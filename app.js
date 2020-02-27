const getAllShopsButton = document.querySelector('#all-shops')
const clearResponseButton = document.querySelector('.button__clear-response')

const getSingleShopButton = document.querySelector('#get-single')
const updateShopButton = document.querySelector('#update-shop')
const deleteShopButton = document.querySelector('#delete-shop')
const createShopButton = document.querySelector('#create-shop')

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
    // const shop = JSON.parse(res.request.response)
    // console.log(shop)
    showShopsToUI(res)
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
    showShopsToUI(res)
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
    console.log(res)
    showShopsToUI(res)
  })
  .catch(error => console.log(new Error('Error', error)))
})

function shopOutput(res){
  responseStatus.innerHTML = `Status: ${res.status}`

  let shopName = ''
  let shopLocationPostcode = ''
  let shopLocationTown = ''

  console.log(res.data)
  for(const data of res.data){
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

function showShopsToUI(result){
  const returnedItem = JSON.parse(result.request.response)

  if(responseList.innerHTML == ''){
    if(result.status === 200){
      responseStatus.className = 'response-successful'
    }
    responseStatus.innerHTML = `Status: ${result.status}`
    responseList.innerHTML = `
    <h3>Returned shop:</h3>
    <section>
      <li>Name: ${returnedItem.name}</li>
      <li>Shop type: ${returnedItem.type}</li>
      <li>Postcode: ${returnedItem.location.postcode}</li>
      <li>Town: ${returnedItem.location.town}</li>
    </section>`
  } else {
    responseList.innerHTML = ''
  }
}

clearResponseButton.addEventListener('click', () => {
  responseStatus.innerHTML = ''
  responseList.innerHTML = ''
})


// display form
const displayAllButton = document.querySelector('#display-all-shops')
const displayGetShopButton = document.querySelector('#display-get-shop')
const displayCreateShopButton = document.querySelector('#display-create-shop')
const displayUpdateShopButton = document.querySelector('#display-update-shop')
const displayDeleteShopButton = document.querySelector('#display-delete-shop')
const containerGetAll = document.querySelector('.crud-container__get-all')
const containerGetOne = document.querySelector('.crud-container__get-single')
const containerCreate = document.querySelector('.crud-container__create-single')
const containerUpdate = document.querySelector('.crud-container__update-single')
const containerDelete = document.querySelector('.crud-container__delete-single')

displayAllButton.addEventListener('click', () => {
  if(containerGetAll.className === 'crud-container__get-all hide'){
    containerGetAll.className = 'crud-container__get-all show'
  } else {
    containerGetAll.className = 'crud-container__get-all hide'
  }
})

displayGetShopButton.addEventListener('click', () => {
  if(containerGetOne.className === 'crud-container__get-single hide'){
    containerGetOne.className = 'crud-container__get-single show'
  } else {
    containerGetOne.className = 'crud-container__get-single hide'
  }
})
displayCreateShopButton.addEventListener('click', () => {
  if(containerCreate.className === 'crud-container__create-single hide'){
    containerCreate.className = 'crud-container__create-single show'
  } else {
    containerCreate.className = 'crud-container__create-single hide'
  }
})
displayUpdateShopButton.addEventListener('click', () => {
  if(containerUpdate.className === 'crud-container__update-single hide'){
    containerUpdate.className = 'crud-container__update-single show'
  } else {
    containerUpdate.className = 'crud-container__update-single hide'
  }
})
displayDeleteShopButton.addEventListener('click', () => {
  if(containerDelete.className === 'crud-container__delete-single hide'){
    containerDelete.className = 'crud-container__delete-single show'
  } else {
    containerDelete.className = 'crud-container__delete-single hide'
  }
})