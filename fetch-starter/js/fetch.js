// query selector for dynamically generate elements container
const addressList = document.querySelector("#address-list");

// function to generate address elements
const generateAddresses = (data) => {
  // loop over data and generate dynamic element
  data.addresses.forEach((address) => {
    // create a div to store our address
    const newAddressDiv = document.createElement('div');
    // add tailwind classes
    newAddressDiv.classList.add("px-6", "pt-4", "pb-2");
    // create HTML string for each address
    const addressHTML = `
    <p>${address.address1}</p>
    <p>${address.city}</p>
    <p>${address.state}, ${address.postalCode}</p>
    `;
    // set innerHTML of newAddressDrive to addressHTML
    newAddressDiv.innerHTML = addressHTML;
    // append newAddressDiv to address-list target
    addressList.appendChild(newAddressDiv);
  });
};

//fetch our data
