function stt() {
    let s = document.getElementById("input").value;
    let w_count=0, char_count=0,map={};
    let count="";
    for(let w of s.split(/\s+/)) {
        w_count++;
        char_count += w.length;
        for(let c of w) {
            c=c.toUpperCase();
            if(c in map) map[c]++;
            else map[c] = 1;
        }
    }
    count+=`Characters: ${char_count}\nWords: ${w_count}\n`;
    for(let c in map) {
        count+=`Character '${c}': ${map[c]}\n`;
    }
    document.getElementById("count").innerText = count;
}