const shopContainer = document.querySelector('.shop-container')
import { get } from 'axios'

const shopButton = document.querySelector('.shop-button')
shopButton.addEventListener('click', function() {
  console.log('Display all shops')

  // async () => {
    const response =  get('http://localhost:3020/api/shops')
    console.log(response.data)
  // }
})
