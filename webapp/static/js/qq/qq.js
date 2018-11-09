var lastScrollY=0;
function heartBeat(){
    diffY=document.documentElement.scrollTop;
    percent=0.1*(diffY-lastScrollY);
    if(percent>0)percent=Math.ceil(percent);else percent=Math.floor(percent);
    document.getElementById("sorollDiv").style.top=parseInt(document.getElementById("sorollDiv").style.top)+percent+"px";
    lastScrollY=lastScrollY+percent;
}
window.setInterval("heartBeat()",1);
function CloseQQ(){
    document.getElementById("sorollDiv").style.display="none";
    return true;
}
document.write('<div id="sorollDiv"style="width:110px;right:10px;position:absolute;top:180px;z-index:99999;"><table width="110"border="0"align="center"cellpadding="0"cellspacing="0"background="qq/images/qq_02.gif"><tr><td align="center"><img src="qq/images/qq_01.gif"alt="在线咨询"width="110"height="58"border="0"usemap="#Map"/></td></tr><tr><td align="center"><img src="qq/images/q3.gif"alt="售前QQ咨询"width="88"height="17"/></td></tr>');
document.write('<tr><td height="5" align="center"></td></tr><tr><td height="25" align="center"><a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=2508227594&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:2508227594:41" alt="" title=""></a></td></tr>');
document.write('<tr><td align="center"><img src="qq/images/qq_03.gif"width="110"height="25"></td></tr></table></div><map name="Map"id="Map"><area shape="rect"coords="91,3,107,17"href="#"onclick="CloseQQ()"/></map>');