/**
 * Created by Omar on 4/21/16.
 */
var canvas = new fabric.Canvas('c', {
  selection: false
});
var grid = 2;
var canvasWidth = 600;
var scale = 0.4;
var imageUrls = ['images/corner.png', 'images/chair-L.png', 'images/chair-R.png', 'images/loveseat-L.png', 'images/loveseat-R.png'];
// create grid
function createGrid() {
  for (var i = 0; i < (canvasWidth / grid); i++) {
    canvas.add(new fabric.Line([i * grid, 0, i * grid, canvasWidth], {
      stroke: '#ccc',
      selectable: false
    }));
    canvas.add(new fabric.Line([0, i * grid, canvasWidth, i * grid], {
      stroke: '#ccc',
      selectable: false
    }))
  }
}
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
        hasControls: false
      });
      canvas.add(parts);
    });
  }
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


//on ready run
createGrid();
createImages();
canvas.renderAll();
