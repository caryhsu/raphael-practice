/// <reference path="../node_modules/@types/raphael/index.d.ts" />

var w = window.innerWidth;
var h = window.innerHeight;
var paper = Raphael("wrap", w, h);

//paper.setViewBox(0,0,w,h,true);
///paper.setSize('100%', '100%');
// ok, raphael sets width/height even though a viewBox has been set, so let's rip out those attributes (yes, this will not work for VML)
//var svg = document.querySelector("svg");
//svg.removeAttribute("width");
//svg.removeAttribute("height");

// draw some random vectors:
var path = "M " + w / 2 + " " + h / 2;
for (var i = 0; i < 100; i++){
    var x = Math.random() * w;
    var y = Math.random() * h;
    paper.circle(x, y, Math.random() * 60 + 2)
            .attr("fill", "rgb("+Math.random() * 255+",0,0)")
            .attr("opacity", 0.5);
    path += "L " + x + " " + y + " ";
}

paper.path(path).attr("stroke","#ffffff").attr("stroke-opacity", 0.2);

paper.text(200,100,"Hello world!2").attr("font","30px Arial").attr("fill","#ffffff");
