function s()
{
var a=document.getElementById('idly').value;
var b=document.getElementById('poori').value;
var c=document.getElementById('ven').value;
var d=document.getElementById('dosa').value;
var e=document.getElementById('vada').value;

var t=a*30+b*40+c*35+d*25+e*8;

document.getElementById("T").value=t;
}