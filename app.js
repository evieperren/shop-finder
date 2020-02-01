fetch('http://localhost:3020/shops').then((response) => {
  return response.json();
}).then((myJson) => {
  console.log(myJson);
}).catch((error) => {
  console.error(error)
})