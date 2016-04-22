/**
 * Created by Omar on 4/21/16.
 */
var canvasWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var canvasHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var canvas = new fabric.Canvas('fabriccanvas', {
  selection: false,
  width: canvasWidth,
  height: canvasHeight
});
var grid = 2;

var scale = 0.4;
var imageUrls = ['images/corner.png', 'images/chair-L.png', 'images/chair-R.png', 'images/loveseat-L.png', 'images/loveseat-R.png'];

startup();

// create images to attach on canvas
function createImages() {
  for (var i = 0; i < imageUrls.length; i++) {
    createImagesObjects(imageUrls[i]);
  }
  function createImagesObjects(url) {
    fabric.Image.fromURL(url, function (oImg) {
      oImg.setLeft(0);
      oImg.setTop(0);
      oImg.set('selectable', false);
      oImg.setScaleX(scale);
      oImg.setScaleY(scale);
      parts = new fabric.Group([oImg]);
      parts.set({
        hasControls: false,
        hasBorders: false

      });
      canvas.add(parts);
    });
  }
}

function createBackground() {
  var bg = new fabric.Rect({
    left: 0,
    top: 0,
    fill:  "#eee",
    width: window.innerWidth,
    height: 75,
    lockRotation: true,
    maxHeight: document.getElementById("fabriccanvas").height,
    maxWidth: document.getElementById("fabriccanvas").width,
    selectable: false,
  });
  var shadow = {
    color: 'rgba(0,0,0,0.6)',
    blur: 3,
    offsetX: 10,
    offsetY: 2,
    opacity: 0.6,
    fillShadow: true,
    strokeShadow: true,
    left: 1700,
    top: 0
  };
  bg.setShadow(shadow);
  canvas.add(bg);
}

// snap to grid
canvas.on('object:moving', function (options) {
  console.log(options);
  var left = Math.round(options.target.left / grid) * grid;
  left = left > 0 ? left : 0;
  left = left <= (canvasWidth - grid - (options.target.width - grid)) ? left : (canvasWidth - grid - (options.target.width - grid));
  var top = Math.round(options.target.top / grid) * grid;
  top = top > 0 ? top : 0;
  top = top <= (canvasWidth - grid - (options.target.height - grid)) ? top : (canvasWidth - grid - (options.target.height - grid));
  options.target.set({
    left: left,
    top: top
  });
  console.log("Matriz Position:[" + top / grid + "," + left / grid + "]");
});

function startup(){
  createBackground();
  createImages();

console.log(canvasWidth);
  console.log(canvasHeight);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  canvas.setBackgroundColor('#f3f5f6');
  canvas.renderAll();
}


