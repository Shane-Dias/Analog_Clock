setInterval(() => {
    let d= new Date();
    let thour= d.getHours();
    let tmin= d.getMinutes();
    let tsec= d.getSeconds();
    let hrotation= 30*thour + tmin/2;
    let mrotation= tmin*6;
    let srotation= tsec*6;

    let h=document.getElementById("hour");
    let m=document.getElementById("min");
    let s=document.getElementById("sec");

    h.style.transform= `rotate(${hrotation}deg)`;
    m.style.transform= `rotate(${mrotation}deg)`;
    s.style.transform= `rotate(${srotation}deg)`;

}, 1000);

