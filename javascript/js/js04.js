function cal(){
    a=Number(document.getElementById("num1").value);
    b=Number(document.getElementById("num2").value);
    let cong=document.getElementById("cong");
    let tru=document.getElementById("tru");
    let nhan=document.getElementById("nhan");
    let chia=document.getElementById("chia");
    if(cong.checked){
        document.getElementById("result").innerHTML = a+b; 
    }
    else if(tru.checked){
        document.getElementById("result").innerHTML = a-b; 
    }
    else if(nhan.checked){
        document.getElementById("result").innerHTML = a*b; 
    }
    else{
        document.getElementById("result").innerHTML = a/b; 
    }
}