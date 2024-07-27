var ask = document.getElementsByClassName("faqs_item-ask");
var i;

for (i = 0; i < ask.length; i++) {
    ask[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    var answer = this.nextElementSibling;

    if(answer.classList == "faqs_item-disable"){
      answer.classList.remove('faqs_item-disable');
      answer.classList.add('faqs_item-answer');
    }
    else{
      answer.classList.add('faqs_item-disable');
      answer.classList.remove('faqs_item-answer');
    }
    
  });
}