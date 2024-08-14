document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById("nav");
    const navToggle = document.getElementById("navToggle");
    var nav_btn1 = document.getElementById("navbtn1");
    var nav_btn2 = document.getElementById("navbtn2");
  
    navToggle.addEventListener("click", function() {
        nav.classList.toggle("active");
        navToggle.classList.toggle("active");
        nav_btn1.classList.toggle("active");
        nav_btn2.classList.toggle("active");
    });
  });