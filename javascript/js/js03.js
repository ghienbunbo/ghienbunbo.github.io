function ptbh(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    let delta=b*b-4*a*c;
    if(delta<0){
        document.getElementById("result").innerHTML = "Phương trình vô nghiệm"
    }
    else if(delta==0){
        document.getElementById("result").innerHTML =`Phương trình có nghiệm kép x1=x2=${-b/2/a}`
    }
    else document.getElementById("result").innerHTML = `Phương trình có hai nghiệm là:<br> x1=${(-b+Math.sqrt(delta))/(2*a)}<br>x2=${(-b-Math.sqrt(delta))/(2*a)}`
}