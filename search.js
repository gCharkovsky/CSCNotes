let search = document.getElementsByClassName("header-menu__search")[0];
function show_search() {
    search.classList.remove("header-menu__search_collapsed");
}
function hide_search() {
    if (search.children[1].value === "")
        search.classList.add("header-menu__search_collapsed");
}

