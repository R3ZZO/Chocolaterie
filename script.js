var slides = document.querySelectorAll(".slide");
var current_slide_index = 0;

function show_slide(slide_number) {

    
    var old_slide = document.querySelector(".slide.visible");
    
    if (old_slide != null) { 
        old_slide.classList.remove("visible");
    }
    

    var the_slide = slides[slide_number];
    
    the_slide.classList.add("visible");

    current_slide_index = slide_number;
    
}
function show_previous_slide(){
    var previous_index = current_slide_index - 1;

    if (previous_index <= slides.length){
        previous_index = 0;
    }
    show_slide(previous_index);
}

function show_next_slide(){
    var next_index = current_slide_index + 1;

    if (next_index >= slides.length){
        next_index = 0;
    }
    show_slide(next_index);

}




document.querySelector("#btn_previous").onclick = show_previous_slide;
document.querySelector("#btn_next").onclick = show_next_slide;

show_slide(0);


var buttons = document.querySelectorAll("#buttons_container button");

buttons.forEach(function(the_button , button_number){
    
    
    the_button.onclick = function() {
        show_slide(button_number);
    }
    
});

setInterval(show_next_slide , 8000)




const nameEl = document.querySelector("#name");
const emailEl = document.querySelector("#email");
const companyNameEl = document.querySelector("#company-name");
const messageEl = document.querySelector("#message");

const form = document.querySelector("#submit-form");

function checkValidations() {
  let letters = /^[a-zA-Z\s]*$/;
  const name = nameEl.value.trim();
  const email = emailEl.value.trim();
  const companyName = companyNameEl.value.trim();
  const message = messageEl.value.trim();
  if (name === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
  if (email === "") {
     document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please fill out this field!";
  } else {
    if (!letters.test(name)) {
      document.querySelector(".name-error").classList.add("error");
      document.querySelector(".name-error").innerText =
        "Please enter only characters!";
    } else {
      
    }
  }
}

function reset() {
  nameEl = "";
  emailEl = "";
  companyNameEl = "";
  messageEl = "";
  document.querySelector(".name-error").innerText = "";
}



