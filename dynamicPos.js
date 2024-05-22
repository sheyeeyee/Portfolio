document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var main = document.getElementById("main");
    
    function adjustMainMargin() {
        var headerHeight = header.offsetHeight; // offsetHeight gets the height including padding of element
        main.style.marginTop = headerHeight + "px";
    }

    // adjust margin on load
    adjustMainMargin();

    // adjust margin on window resize
    window.addEventListener("resize", adjustMainMargin);
});