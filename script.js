
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbyS1hpiZzYcf-XK0mmFZeUruUs84e_9ZE5qvgpLc3wHc5ZqyS25biv-qMxN60YNB_gClw/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

AOS.init();