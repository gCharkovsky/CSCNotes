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
function toggle_theme() {
    if (document.body.className === "dark-theme") {
        document.body.className = "";
        document.cookie = "dark=false;"
    } else {
        document.body.className = "dark-theme";
        document.cookie = "dark=true;"
    }
}

set_theme();
