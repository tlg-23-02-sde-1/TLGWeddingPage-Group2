home.addEventListener("click",()=> {
    location.href = "../../index.html"
})
plan.addEventListener("click",()=> {
    location.href = "../../Plan/plan.html"
})
rsvp.addEventListener("click",()=> {
    location.href = "../../RSVP/rsvp.html"
})
gifts.addEventListener("click",()=> {
    location.href = "../../Gifts/gifts.html"
})
photos.addEventListener("click",()=> {
    location.href = "../../Photos/photos.html"
})

const justin_and_angela_wedding_registry = "https://z4wup2ehc7.execute-api.us-west-2.amazonaws.com/justin_and_angela_wedding_registry";
const addItemForm = document.getElementById("addItemForm");
const jaWeddingRegistry = document.getElementById("jaWeddingRegistry");

// // Function to add a new item to the registry
// const addItem = (name, price,) => {
//   const newItem = { name: name, price: price };

// // Make an HTTP POST request to the API endpoint to add the new item
// fetch (justin_and_angela_wedding_registry, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newItem),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       // Clear the input fields and add the new item to the registry list
//       addItemForm.reset();
//       const listItem = document.createElement("li");
//       listItem.textContent = data.name + " - " + data.price;
//       registryList.appendChild(listItem);
//     })
//     .catch((error) => {
//       console.error("Error adding registry item:", error);
//     });
// };

// // Add an event listener to the form submit button to add the new item
// addItemForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const name = document.getElementById("nameInput").value;
//   const price = document.getElementById("priceInput").value;
//   addItem(name, price);
// });

// Load the registry items from the API and add them to the registry list
fetch(justin_and_angela_wedding_registry)
  .then((response) => response.json())
  .then((data) => {
    // Loop through the registry items and create list items for each item
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.name + " - " + item.price;
      registryList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error fetching registry items:", error);
  });

// export const handler = async(event) =>{
//     //TODO implement
//     const   weddingregistry =[{
//         name: "Item"
//     }]
//     const response = {
//         statusCode: 200,
//         body: JSON.stringify(weddingregistry),
//     };
//     return response;
// };

// async function logJSONData(){
//     const response = await fetch("https://z4wup2ehc7.execute-api.us-west-2.amazonaws.com/justin_and_angela_wedding_registry");
//     const jsonData = await response.json();
//     console.log(jsonData)
// }