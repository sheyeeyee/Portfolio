document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var main = document.getElementById("main");
    if (!header || !main) return;
    
    function adjustMainMargin() {
        var headerHeight = header.offsetHeight; // offsetHeight gets the height including padding of element
        main.style.marginTop = headerHeight + "px";
        document.documentElement.style.setProperty("--header-offset", (headerHeight + 20) + "px");
    }

    // adjust margin on load
    adjustMainMargin();

    // adjust margin on window resize
    window.addEventListener("resize", adjustMainMargin);
    new ResizeObserver(adjustMainMargin).observe(header);
});
