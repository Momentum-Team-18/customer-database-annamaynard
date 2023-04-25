let customerProfiles = document.querySelector("#customerProfiles");

console.log(customerProfiles);

// Build a container for each customer and populate

for (let customer of customers) {
  
  let formatedState = nameToAbbr(customer.location.state);

  // DIV
  let customerCard = document.createElement("div");
  // created the card for this customer

  // CUSTOMERIMAGE
 
  let customerImage = document.createElement("img");
  customerImage.src = customer.picture.large;
  customerCard.appendChild(customerImage);
  customerImage.classList.add('customerImage');
 
 
  //  NAME
  let customerName = document.createElement("h2");
  customerName.innerText = `${customer.name.first} ${customer.name.last}`;
  customerCard.appendChild(customerName);
  customerName.classList.add('customerName');
  // added the name of the customer to the card

  // EMAIL
  let customerEmail = document.createElement("p");
  customerEmail.innerText = customer.email;
  customerCard.appendChild(customerEmail);
  customerEmail.classList.add('customerEmail');

  // PHONE
  let customerPhone = document.createElement("p");
  customerPhone.innerText = customer.phone;
  customerCard.appendChild(customerPhone);

  // ADDRESS

  let customerAddress = document.createElement("p");
  customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name}. \n ${customer.location.city},  ${formatedState} ${customer.location.postcode}`;
  customerCard.appendChild(customerAddress);

  let formattedDate = moment(customer.registered.date).format("MMM,DD YYYY");
  let formattedDob = moment(customer.dob.date).format("MMM,DD YYYY");

  // DATES

  let customerDob = document.createElement("p");
  customerCard.appendChild(customerDob);

  let customerRegistered = document.createElement('p');
  customerRegistered.innerText = `DOB: ${formattedDob} \n Registered Since: ${formattedDob}`;
  customerCard.appendChild(customerRegistered);

  customerProfiles.appendChild(customerCard);

  // creating a div to hold all of each customer info
}
