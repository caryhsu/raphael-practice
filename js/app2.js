var w = window.innerWidth;
var h = window.innerHeight;
var paper = Raphael("wrap", w, h);

var re = paper.rect(100, 100, 100, 100, 0).attr({
    // Uncomment and mousedown mouseup *inside* the rect will be fired.
    "fill": "#FFF",
    "stroke": "#222",
});
re.mouseup(function () {
    console.log("mouseup");
});
re.mousedown(function () {
    console.log("mousedown");
});

