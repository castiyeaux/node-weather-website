console.log("Client side JavaScript file loaded.");

// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//     response.json().then((data) => {
//         console.log(data);
//     });
// });



const weatherForm = document.querySelector("form");
const inputLocation = document.querySelector("input");
const messageOne = document.querySelector("#message-one");
const messageTwo = document.querySelector("#message-two");

weatherForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = inputLocation.value;
    // console.log(location);

    messageOne.textContent = "Loading...";
    messageTwo.textContent = "";

    fetch("/weather?address=" + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                // console.log(data.error);

                messageOne.textContent = data.error;
            }
            else {
                // console.log(data.location);
                // console.log(data.forecast);

                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});