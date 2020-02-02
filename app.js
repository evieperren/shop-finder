const shopContainer = document.querySelector('.shop-container')
import { get } from 'axios'

function showShops() {
  async () => {
    const response = await get('http://localhost:3020/api/shops')
    console.log(response.data)
    // alert(response.data.forEach(shop => {
    //   alert(shop)
    // }))
  }
}