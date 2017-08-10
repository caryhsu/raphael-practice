
var w = window.innerWidth;
var h = window.innerHeight;
var paper = Raphael("wrap", w, h);

var path = "M " + w / 2 + " " + h / 2;
for (var i = 0; i < 10; i++) {
    var x = Math.random() * w;
    var y = Math.random() * h;
    var colorR = Math.random() * 255;
    var colorG = 0;
    var colorB = 0;
    var color1 = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
    var color = "rgb(" + colorR + "," + colorG + "," + colorB + ")";
    console.log(color);
    paper.circle(x, y, Math.random() * 60 + 2)
        .attr("fill", color)
        .attr("opacity", 0.5);
    path += "L " + x + " " + y + " ";
}
paper.path(path)
    .attr("stroke", "#ffffff")
    .attr("stroke-opacity", 0.2);
paper.text(200, 100, "Hello world!2")
    .attr("font", "30px Arial")
    .attr("fill", "#ffffff");
