
let customerProfiles = document.querySelector('#customerProfiles');

console.log(customerProfiles);

// Build a container for each customer and populate 

for (let customer of customers) {

    let customerCard = document.createElement('div');
    // created the card for this customer

    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    // added the name of the customer to the card 

    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);  
   

    customerProfiles.appendChild(customerCard);




            // creating a div to hold all of each customer info 
}
