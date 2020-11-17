var d, h, m, s, clock, clr, tt;

function cloky() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    if (h <= 9) {
        h = '0' + h;

    }
    if (m <= 9) {
        m = '0' + m;

    }
    if (s <= 9) {
        s = '0' + s;
    }

    clock = h + ":" + m + ":" + s;
    clr = "#" + m + s + h;
    tt = s * 1.33 + "%";
    document.getElementById("clock").innerHTML = clock,
        document.body.style.backgroundColor = clr;

    document.getElementById("clock").style.position = "relative";
    document.getElementById("clock").style.top = tt;

    setTimeout(cloky, 1000);
}
cloky();

var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for (var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}