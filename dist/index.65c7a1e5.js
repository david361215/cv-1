let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* 你好，我叫小王
 * 接下来，我演示一下我的前端功底
 * 首先我要准备一个 div
 */
#div1{
width:200px;
height:200px;
}
/* 接下来我把 div 变成一个八卦图
 * 注意看好了
 * 首先，把 div 变成一个圆
 */
#div1{
border-radius: 50%;
box-shadow: 0 0 3px rgba(0,0,0,0.5);
}
/* 八卦是阴阳形成的
 * 一黑一白
 */
#div1{
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
} 
#div1:before{
top:0;
left:50%;
width:100px;
height:100px;
transform:translateX(-50%);
border-radius:50%;
background:#ffffff;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#div1:after{
top:50%;
left:50%;
width:100px;
height:100px;        
transform:translateX(-50%);
border-radius:50%;
background:#000000;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;
let n = 0;
let string2 = "";
let step = ()=>{
    setTimeout(()=>{
        //如果是回车，就不照搬
        //如果不是回车，就照搬
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += "&nbsp;";
        else string2 += string[n];
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 10000);
        html.scrollTo(0, 10000);
        if (n < string.length - 1) {
            n++;
            step();
        }
    }, 0);
};
step();

//# sourceMappingURL=index.65c7a1e5.js.map
