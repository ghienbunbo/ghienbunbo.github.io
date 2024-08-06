function bcc(){
    for(i=2;i<10;i++){
        var cell="";
        for(j=2;j<10;j++){
            cell+=(`${Number(i)}  x  ${Number(j)} =  ${Number(i*j)} <br>`);
        }
        document.getElementById('t'+i).innerHTML = cell;
    }
}
window.onload=function() {
    bcc();
}