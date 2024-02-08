document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.link');

    links.forEach(function(link) {
        link.addEventListener('click', function() {
            var dropdownMenu = this.nextElementSibling;
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
            } else {
                var allMenus = document.querySelectorAll('.Bdropdown-menu, .Adropdown-menu');
                allMenus.forEach(function(menu) {
                    menu.classList.remove('show');
                });
                dropdownMenu.classList.add('show');
            }
        });
    });

    document.addEventListener('click', function(event) {
        var target = event.target;
        if (!target.closest('.dropdown')) {
            var allMenus = document.querySelectorAll('.Bdropdown-menu, .Adropdown-menu');
            allMenus.forEach(function(menu) {
                menu.classList.remove('show');
            });
        }
    });
});