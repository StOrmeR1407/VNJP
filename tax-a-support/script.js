var ask = document.getElementsByClassName("faqs_item-ask");
var i;

for (i = 0; i < ask.length; i++) {
    ask[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    var mask = this;
    var answer = this.nextElementSibling;

    if(answer.classList == "faqs_item-disable"){
      answer.classList.remove('faqs_item-disable');
      answer.classList.add('faqs_item-answer');
      mask.getElementsByClassName('faqs_item-plus')[0].innerHTML="-";
    }
    else{
      answer.classList.add('faqs_item-disable');
      answer.classList.remove('faqs_item-answer');
      mask.getElementsByClassName('faqs_item-plus')[0].innerHTML="+";
    }
    
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const navToggle = document.getElementById("navToggle");
  const nav_header = document.getElementById("nav_header");

  navToggle.addEventListener("click", function() {
      nav_header.classList.toggle("active");
      navToggle.classList.toggle("active");
  });
});