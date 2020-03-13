window.onscroll = function() {
    var header = document.getElementById("navHeader");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("scrolling");
      } else {
        header.classList.remove("scrolling");
    }
};