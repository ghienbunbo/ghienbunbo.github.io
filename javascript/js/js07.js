var str="";
function chuanhoa() {
    var s1 = document.querySelector(".s1").value;
    var arr = s1.toLowerCase().split(' ');
    var s = "";

    for (let word of arr) {
        s += word.charAt(0).toUpperCase() + word.slice(1) + ' ';
    }
    str=s;
    document.querySelector(".s1").value = s;
}
function daochuoi() {
    var s1 = document.querySelector(".s1").value;
    var arr = s1.split(' ');
    var s = "";

    for (let word of arr){
        s = word + ' ' + s;
    }
    str=s;
    document.querySelector(".s1").value = s.trim();
}
function khoiphuc(){
    document.querySelector(".s1").value = str;
}
function replace(){
    var s1 = document.querySelector(".s1").value;
    var s2 = document.querySelector(".s2").value;
    var s3 = document.querySelector(".s3").value;

    var pos = s1.indexOf(s2);
    while(pos>=0){
        s1.replace(s2,s3);
        pos= s1.replace(s2);
    }
    str=s1;
    document.querySelector(".s1").value = s1;
}
