window.onscroll = function() {
    const header = document.querySelector("#navHeader")
    const sticky = header.offsetTop
    if (window.pageYOffset > 50) {
        header.classList.add("scrolling");
      } else {
        header.classList.remove("scrolling");
    }
};