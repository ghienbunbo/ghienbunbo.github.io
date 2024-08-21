var s1_origin="";
var have_changed = false;
function chuanhoa(){
    if(have_changed===false){
        have_changed = true;
        s1_origin = document.getElementById("s1").value
    }
    const s1 = document.getElementById("s1").value.trim();
    let s = "";
    for (let word of s1.split(/\s+/)){
        s+=word[0].toUpperCase() + word.slice(1).toLowerCase()+' ';
    }
    document.getElementById("s1").value = s.trim();
}
function daochuoi() {
    if(have_changed===false){
        have_changed = true;
        s1_origin = document.getElementById("s1").value
    }
    const s1 = document.getElementById("s1").value.trim();
    let s = "";
    for (let word of s1.split(/\s+/)){
        s = word + ' ' + s;
    }
    document.getElementById("s1").value = s.trim();
}
function khoiphuc() {
    document.getElementById("s1").value = s1_origin;
    have_changed = false;
}
function thays2vaos3() {
    if(have_changed===false){
        have_changed = true;
        s1_origin = document.getElementById("s1").value
    }
    const s1 = document.getElementById("s1").value.trim();
    const s2 = document.getElementById("s2").value.trim();
    const s3 = document.getElementById("s3").value.trim();
    let s = "";
    for (let word of s1.split(/\s+/)){
        if (word === s2) s+=s3+' ';
        else s+=word+' ';
    }
    document.getElementById("s1").value = s.trim();
}
function chens2vaos1() {
    if(have_changed===false){
        have_changed = true;
        s1_origin = document.getElementById("s1").value
    }
    const s1 = document.getElementById("s1").value.trim();
    const s2 = document.getElementById("s2").value.trim();
    const vt = document.getElementById("vt").value.trim();
    if(vt>=0 && vt<=s1.length){
        let s = s1.slice(0,vt) + s2 + s1.slice(vt);
        document.getElementById("s1").value = s;
    }
}
function xoas2trongs1() {
    if(have_changed===false){
        have_changed = true;
        s1_origin = document.getElementById("s1").value
    }
    const s1 = document.getElementById("s1").value.trim();
    const s2 = document.getElementById("s2").value.trim();
    let s = "";
    for (let word of s1.split(/\s+/)){
        if (word === s2) s+='';
        else s+=word+' ';
    }
    document.getElementById("s1").value = s.trim();
}