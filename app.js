const getAllShopsButton = document.querySelector('.all-shops__button')
const getAllShopsResult = document.querySelector('.get-all__result')

const getSingleShopButton = document.querySelector('.get-single__button')
const updateShopButton = document.querySelector('.update-single__button')
const deleteShopButton = document.querySelector('.delete-single__button')


const responseContainer = document.querySelector('.shop-container')
getAllShopsButton.addEventListener('click', function() {
  // show all the shops
  console.log('Get all shops request')
  axios({
    method: 'get',
    url: 'http://localhost:3020/api/shops/',
    // params: {
    //   _limit: 5
    // }
  })
    .then(res => {
      if(response.status === 200){
        shopOutput(res)
      }
    })
    .catch(error => console.log(new Error('Error', error)))

    
})

getSingleShopButton.addEventListener('click', function() {
  // display a single shop
  console.log('Get single shop request')
})

updateShopButton.addEventListener('click', function() {
  console.log('Update shop request')

})

deleteShopButton.addEventListener('click', function() {
  console.log('Delete shop request');
})

function shopOutput(res){
  responseContainer.innerHTML = `
    <div>
      <h2 class="response-status">Status: ${res.status}</h2>
    </div>
    <div class="response-data">${JSON.stringify(res.data)}</div>
  `
  console.log(res.status)
}