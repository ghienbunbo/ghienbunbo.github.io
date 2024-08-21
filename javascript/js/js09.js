var arr = [];
function create(){
    let n = document.getElementById("n").value;
    if(n>0 && n<=50){
        arr=[];
        for(let i=0;i<n;i++){
            arr[i] = Math.floor(Math.random()*100)%100;
        }
        let s = "Mảng ban đầu: ";
        for(let num of arr){
            s+=num+" ";
        }
        document.getElementById("res").innerHTML = s;
    }
    document.getElementById("asc").innerHTML = "";
    document.getElementById("desc").innerHTML = "";
}
function sort_asc(){
    arr.sort(function(a, b){return a-b});
    let s = "Mảng tăng dần: ";
    for(let num of arr){
        s+=num+" ";
    }
    document.getElementById("asc").innerHTML = s;
}
function sort_desc(){
    arr.sort(function(a, b){return b-a});
    let s = "Mảng giảm dần: ";
    for(let num of arr){
        s+=num+" ";
    }
    document.getElementById("desc").innerHTML = s;
}