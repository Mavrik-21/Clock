let date;
let time;
let d;


dt = () => {
    d = new Date();
    date = d.toDateString();
    time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
    document.getElementById('show').innerHTML = time +"<br>"+ date;
}

setInterval(dt, 1000);

$(document).ready(function(){
    $("h3").on({
        mouseenter: function(){
        $(this).css("color","white");
    }
    });
});