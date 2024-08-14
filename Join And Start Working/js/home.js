document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById("navToggle")

    navToggle.addEventListener("click", function() {
        navToggle.classList.toggle("active");
        document.getElementById("mySidenav").style.width = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    });

    var closebtn = document.getElementById("closebtn");
    closebtn.addEventListener("click", function(){
        document.getElementById("mySidenav").style.width = "0px";
        document.body.style.backgroundColor = "white";
    });

    function easeOutQuad(t) {
        return t * (2 - t);
      }
    
      document.addEventListener('scroll', function() {
        var statistics = document.querySelectorAll('.project_number');
        statistics.forEach(function(stat) {
          var rect = stat.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            if (!stat.classList.contains('visible')) {
              var start = 0; // Giá trị bắt đầu
              var end = parseInt(stat.getAttribute('data-end'), 10); // Giá trị đích
              var duration = 3000; // Thời gian hiệu ứng 2 giây
              var startTime = null;
    
              function animate(time) {
                if (!startTime) startTime = time;
                var elapsed = time - startTime;
                var progress = Math.min(elapsed / duration, 1);
                var value = start + (end - start) * easeOutQuad(progress);
                stat.textContent = Math.floor(value);
    
                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  stat.textContent = end; // Đảm bảo giá trị cuối cùng là `end`
                }
              }
    
              requestAnimationFrame(animate);
              stat.classList.add('visible');
            }
          }
        });
      });

});