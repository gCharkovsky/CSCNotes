var time = (Date.now()%(1000*3600*24))/3600000 + 3;
if(time<8 || time>20)
    document.body.className = "dark-theme";


function toggle_theme() {
    if(document.body.className === "dark-theme"){
        document.body.className = "";
    } else {
        document.body.className = "dark-theme";
    }
}

document.getElementById("theme_toggler").addEventListener("click", toggle_theme);
