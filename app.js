const getAllShopsButton = document.querySelector('.all-shops__button')
const getAllShopsResult = document.querySelector('.get-all__result')

const getSingleShopButton = document.querySelector('.get-single__button')
const updateShopButton = document.querySelector('.update-single__button')
const deleteShopButton = document.querySelector('.delete-single__button')
const createShopButton = document.querySelector('.create-single__button')

const responseContainer = document.querySelector('.shop-container')

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
  console.log('Get single shop request')
  axios
  .get('http://localhost:3020/api/shops/:shopId')
  .then(res => {shopOutput(res)})
  .catch(error => console.log(new Error('Error', error))) 
})

// update
updateShopButton.addEventListener('click', function() {
  console.log('Update shop request')
  axios
  .put('http://localhost:3020/api/shops/:shopId')
  .then(res => {shopOutput(res)})
  .catch(error => console.log(new Error('Error', error))) 
})

// delete
deleteShopButton.addEventListener('click', function() {
  console.log('Delete shop request');
  axios
  .delete('http://localhost:3020/api/shops/5e2f4bd3bac7d7174de10160', {
    params: 'shopID'
  })
  .then(res => {shopOutput(res)})
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
    .then(response => {
      responseContainer.innerHTML = JSON.stringify(response.data)
      response.save()
    })
    .catch(error => console.log(new Error('Error', error)))

})
function shopOutput(res){
  responseContainer.innerHTML = `
    <div>
      <h2 class="response-status">Status: ${res.status}</h2>
    </div>
    <div class="response-data">${JSON.stringify(res.data)}</div>
  `
  const responseDataContainer = document.querySelector('.response-data')
  for(const data in res.data){
    console.log(res.data[data].name)
    // responseDataContainer.innerHTML = JSON.stringify(res.data[data].name)
  }
}