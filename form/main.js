const inputName = document.querySelector("#input-name");
const inputMail = document.querySelector("#input-mail");
const inputMessage = document.querySelector("#input-message");
const btn = document.querySelector("form button[type='submit']");
const form = document.querySelector("form");
const regEx = /\S+@\S+\.\S+/;

function checkInput(e) {
    if (inputName.value.trim() && regEx.test(inputMail.value.trim()) && inputMessage.value.trim()) {
        btn.classList.remove("btn-danger");
        btn.classList.add("btn-success");
        btn.disabled = false;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = inputName.value.trim(),
        email = inputMail.value.trim(),
        message = inputMessage.value.trim();

    console.log("Given Name : ", name);
    console.log("Given email : ", email);
    console.log("Given message : ", message);

    form.reset();

});

















// const inputName = document.querySelector("#input-name");
// const inputEmail = document.querySelector("#input-mail");
// const inputMessage = document.querySelector("#input-message");
// const inputBtn = document.querySelector(".submit-button");
// var regEx = /\S+@\S+\.\S+/;

// function checkInput() {
//     if (inputName.value && inputMessage.value && regEx.test(inputEmail.value)) {
//         inputBtn.classList.remove("btn-danger");
//         inputBtn.classList.add("btn-success");
//         inputBtn.disabled = false;
//     } else {
//         inputBtn.classList.remove("btn-success");
//         inputBtn.classList.add("btn-danger");
//         inputBtn.disabled = true;
//     }
// }

// const form = document.querySelector(".form");
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const name = inputName.value,
//         email = inputEmail.value,
//         message = inputMessage.value;

//     console.log("Your given name:", name);
//     console.log("Your given email:", email);
//     console.log("Your given message:", message);
//     form.reset();

// });

















// var inputName = document.getElementById('input-name');
// var inputMail = document.getElementById('input-mail');
// var inputMessage = document.getElementById('input-message');
// var button = document.querySelector('.submit-button');
// var regEx = /\S+@\S+\.\S+/;
// var form = document.querySelector('.form');

// function checkInput() {
//     console.log(inputName.value);
//     if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
//         button.classList.add('btn-success');
//         button.classList.remove('btn-danger');
//         button.disabled = false;
//     } else {
//         button.classList.add('btn-danger');
//         button.classList.remove('btn-success');
//         button.disabled = true;
//     }
// }

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Submitted');
// });