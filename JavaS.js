function from1to3 (){
  
    x = document.getElementById("r1");
    y = document.getElementById("r2");
    z = document.getElementById("r3");
    s = document.getElementById("r4");
if(x.checked == true)
{
    x.checked = false;
    setTimeout(y.checked=true,3000)
}
else if(y.checked == true)
{

 y.checked= false;
 setTimeout(z.checked=true,3000)   

}
else if(z.checked==true)
{
    z.checked = false;
    setTimeout(s.checked= true,3000)
}
else if(s.checked==true)
{
    s.checked=false;
    setTimeout(x.checked=true,3000)
}

}
var interval = setInterval(from1to3, 5000);