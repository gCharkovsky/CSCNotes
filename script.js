var time = (Date.now()%(1000*3600*24))/3600000 + 3;
if(time<8 || time>20)
    document.body.className = "dark-theme";