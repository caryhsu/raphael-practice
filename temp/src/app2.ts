/// <reference path="../node_modules/@types/raphael/index.d.ts" />
var w = window.innerWidth;
var h = window.innerHeight;
var paper = Raphael("wrap", w, h);

// 請在下面撰寫您的程式碼
var re = paper.rect(100, 100, 100, 100, 0).attr({
    // Uncomment and mousedown mouseup *inside* the rect will be fired.
    "fill": "#FFF",
    "stroke": "#222",
});

re.mouseup(function() {
    console.log("mouseup")
});
re.mousedown(function() {
    console.log("mousedown")
});
