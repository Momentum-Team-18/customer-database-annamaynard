const customerGrid = document.getElementById("#customer-grid");

// Create a grid item for each customer and append it to the grid container

customers.forEach((customer) => {
  const gridItem = document.createElement("div");

  customerGrid.appendChild(gridItem);

  gridItem.classList.add("grid-item");
  gridItem.innerHTML = `
    <img src="${customer.picture.thumbnail}" alt="${customer.name.first} ${customer.name.last}">
    <h3>${customer.name.first} ${customer.name.last}</h3>
    <p>${customer.email}</p>
    <p>${customer.phone}</p>
    <p>${customer.location.city}, ${customer.location.state}</p>
    <p>${customer.registered}</p>
  `;
});

// let peopleListed= []
// // create empty array to keep track of people we arleady aded divs for

// let statesListed= []
// console.log(statesListed)

// function createCustomerCardDiv (name){
//   let customerCardDiv = document.createElement ("div");
// }