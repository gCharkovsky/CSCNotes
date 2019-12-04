function set_theme() {
    if (document.cookie === "dark=true")
        document.body.className = "dark-theme";
    else if (document.cookie === "dark=false") {

    } else {
        let time = (Date.now() % (1000 * 3600 * 24)) / 3600000 + 3;
        if (time < 8 || time > 20)
            document.body.className = "dark-theme";
    }
}

set_theme();
let search = document.getElementsByClassName("header-menu__search")[0];

function toggle_theme() {
    if (document.body.className === "dark-theme") {
        document.body.className = "";
        document.cookie = "dark=false;"
    } else {
        document.body.className = "dark-theme";
        document.cookie = "dark=true;"
    }
}

function show_search() {
    search.classList.remove("header-menu__search_collapsed");
}

function hide_search() {
    if (search.children[1].value === "")
        search.classList.add("header-menu__search_collapsed");
}