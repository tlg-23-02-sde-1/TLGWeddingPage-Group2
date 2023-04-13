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


document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("https://1trzzhi5zh.execute-api.us-east-2.amazonaws.com/jaweddingregistry/jaweddingregistry");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);

    const list = document.createElement("ul"); // create a new unordered list
    data.forEach(item => {
      const listItem = document.createElement("li"); // create a new list item
      const itemText = document.createTextNode(`${item.Item} - ${item.Price}`); // create text node with item and price
      const link = document.createElement("a"); // create a new link
      link.href = item.URL_Link; // set the link URL to the item's URL_Link
      link.appendChild(itemText); // append the text node to the link
      listItem.appendChild(link); // append the link to the list item
      list.appendChild(listItem); // append the list item to the unordered list
    });

    document.body.appendChild(list); // append the unordered list to the body of the document
  } catch (error) {
    console.error(error);
  }
});


//const jaweddingegistry = "https://1trzzhi5zh.execute-api.us-east-2.amazonaws.com/jaweddingregistry/jaweddingregistry";
// const jaWeddingRegistry = document.getElementById("jaweddingregistry");

// async function logJSONData(){
//     const response = await fetch();
//     const jsonData = await response.json();
//     console.log(jsonData)
// // Load the registry items from the API and add them to the registry list
//   fetch("https://1trzzhi5zh.execute-api.us-east-2.amazonaws.com/jaweddingregistry/jaweddingregistry")
//     .then((response) => response.json())
//     .then((data) => {
//     // Loop through the registry items and create list items for each item
//       data.forEach((item) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = item.name + " - " + item.price;
//         registryList.appendChild(listItem);
//       });
//     })
//     .catch((error) => {
//       console.error("Error fetching registry items:", error);
//     });
// }
  

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
