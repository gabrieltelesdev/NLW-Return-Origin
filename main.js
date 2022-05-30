function onScroll() {
    let nav = document.querySelector("#navigation");
    if (scrollY > 0) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }
}


function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded');
}