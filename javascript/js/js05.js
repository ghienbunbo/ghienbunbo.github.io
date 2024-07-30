function bcc(){
    for(i=2;i<10;i++){
        for(j=2;j<10;j++){
            document.getElementById("t"+i).innerHTML = `${i} x ${j} = ${i*j}`
        }
    }
}