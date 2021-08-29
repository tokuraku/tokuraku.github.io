var d1 = new Date();
var d2 = new Date();
var d3 = new Date();
d2.setDate(d2.getDate()-19);
d3.setDate(d3.getDate()+21);
var text1 = `本日${d1.getMonth()+1}/${d1.getDate()}`;
var text2 = `19日前は${d2.getMonth()+1}/${d2.getDate()}です`;
var text3 = `3週間(21日)後は${d3.getMonth()+1}/${d3.getDate()}です`;
        
var d4 = new Date();
var d5 = new Date();
d4.setFullYear(d4.getFullYear()-15);
d5.setFullYear(d5.getFullYear()-12);
var l = [d4.getFullYear(),d4.getMonth()+1,d4.getDate(),d5.getFullYear(),d5.getMonth()+1,d5.getDate()]
var textC = `12歳から15歳の範囲は ${l[0]}/${l[1]}/${l[2]} から ${l[3]}/${l[4]}/${l[5]} です`;

var par = document.querySelector('div#static');
par.innerHTML = text1 + '<br>' + text2 + '<br>' + text3 + '<br><br>' + textC; 
