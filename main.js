
let customerProfiles = document.querySelector('#customerProfiles');

console.log(customerProfiles);

// Build a container for each customer and populate 

for (let customer of customers) {

// DIV
    let customerCard = document.createElement('div');
    // created the card for this customer

// PHOTO/THUMBNAIL
let customerThumbnail = document.createElement('img');
customerThumbnail.src = customer.picture.large;
customerCard.appendChild(customerThumbnail);

//  NAME 
    let customerName = document.createElement('h2');
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerCard.appendChild(customerName);
    // added the name of the customer to the card 

// EMAIL
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    customerCard.appendChild(customerEmail);  
   
// PHONE
    let customerPhone = document.createElement('p');
    customerPhone.innerText = customer.phone;
    customerCard.appendChild(customerPhone);

// ADDRESS

    let customerAddress = document.createElement('p');
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}. ${customer.location.city},  ${customer.location.state} ${customer.location.postcode}`
    customerCard.appendChild(customerAddress)

// DOB
    let customerDob = document.createElement('p');
    customerDob.innerText = `DOB: ${customer.dob.date}`;
    customerCard.appendChild(customerDob);
        // something about date formating here 
    
// DATE REGISTERED
    // let customerRegistered = document.createElement('p');
    // customerRegistered = customer.registered;
    // customerCard.appendChild(customerRegistered);





    customerProfiles.appendChild(customerCard);




            // creating a div to hold all of each customer info 
}
