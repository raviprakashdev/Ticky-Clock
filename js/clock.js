var d, h, m, s, clock, clr,tt;

function cloky(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

if( h<=9){
    h='0' + h;
    
}
if( m<=9){
    m='0' + m;

}
if( s<=9){
    s='0' + s;
}

clock = h+":"+m+":"+s;
clr = "#" + m+s+h;
clr_clock_text = "#" + s+h+m;
tt=s * 1.33+"%";
document.getElementById("clock").innerHTML=clock,
document.body.style.backgroundColor=clr;
document.getElementById("clock").style.backgroundColor=clr_clock_text;

document.getElementById("clock").style.position="relative";
document.getElementById("clock").style.top=tt;

setTimeout(cloky,1000);
}
cloky();