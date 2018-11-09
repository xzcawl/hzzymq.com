var speed=20; //数字越大速度越慢
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML;
function Marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0)
        tab.scrollLeft-=tab1.offsetWidth
    else{
        tab.scrollLeft++;
    }
}
var MyMar=setInterval(Marquee,speed);
tab.onmouseover=function() {clearInterval(MyMar)};
tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};



/*
var speed=20;
var tab=document.getElementById("demo");
var tab1=document.getElementById("demo1");
var tab2=document.getElementById("demo2");
tab2.innerHTML=tab1.innerHTML; //通过赋值获得tab1的值
function marquee(){
    if(tab2.offsetWidth-tab.scrollLeft<=0)//当tab的移动宽度大于等于demo1的时候，scrollLeft为0，也就是恢复到未移动前的情况，继续移动
    {tab.scrollLeft=0}
    else
    {tab.scrollLeft++;} //图片层不断的往left移动
}
var timer=setInterval(marquee,speed); //定时器
tab.onmouseover=function(){clearInterval(timer)};//鼠标经过容器的时候清除定时器
tab.onmouseout=function(){timer=setInterval(marquee,speed);}//鼠标移开容器的时候開始定时器
*/
