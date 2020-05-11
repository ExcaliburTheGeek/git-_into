canvas=document.getElementById("mycanvas");
H=800;
W=1200;

canvas.height=H;
canvas.width=W;

pen=canvas.getContext('2d');

let h=0,w=0;
while(h<H)
{
    if(w<W)
    {
      if((h/100)%2==0)
      pen.fillRect(w,h,100,100);
      else 
      pen.fillRect(w+100,h,100,100);
      w+=200;
    }
    else{
        h+=100;
        w=0;
    }
}

