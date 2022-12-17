/*value*/
const html = document.querySelector("html");
const moon_check = document.querySelector("#flexSwitchCheckChecked");
const ui = new UI();

//evenetlistener
evenetListener();
function evenetListener() {
  moon_check.addEventListener("click", checkmoon);
  
}

//function

function checkmoon() {
  if (moon_check.checked) {
    html.classList.add("moon");

  } else {
    html.classList.remove("moon");
   
  }
}
