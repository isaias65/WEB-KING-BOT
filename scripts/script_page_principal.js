
var navItems = document.querySelectorAll(".nav_list li");

navItems.forEach(function(item) {
    item.addEventListener("click", function() {
        navItems.forEach(function(navItem) {
            navItem.classList.remove("active");
        });
        this.classList.add("active");
    });
});
