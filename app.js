const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.getElementById('button');
const errorMsg = document.querySelector('.errorMsg');



form.addEventListener('submit', (e) => {
    // prevent browser default
    e.preventDefault();

    const emailValue = email.value.trim();
    if(!emailValue) {
        // show empty 
        email.classList.add('error');
        errorMsg.innerHTML =
          "Whoops! It looks like you forgot to add your email";
    } else if (!isValidEmail(emailValue)) {
        // show invalid
        email.classList.add("error");
        errorMsg.innerHTML = "Please provide a valid email address";
    } else {
        // submit
        email.classList.remove("error");
        errorMsg.innerHTML = "";
    }
});

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
