/**
 * Created by Omar on 4/21/16.
 */
var canvas = new fabric.Canvas('c', {
  selection: false
});
var grid = 5;
var canvasWidth = 600;
var scale = 0.4

// create grid

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

// add objects
//
//canvas.add(new fabric.Rect({
//  left: 50,
//  top: 50,
//  width: 50,
//  height: 50,
//  fill: '#faa',
//  originX: 'left',
//  originY: 'top',
//  centeredRotation: true
//}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));
//
//
//
//canvas.add(new fabric.Rect({
//  left: 100,
//  top: 100,
//  width: 50,
//  height: 100,
//  fill: '#000',
//  originX: 'left',
//  originY: 'top',
//  centeredRotation: true,
//}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));
//
//
//canvas.add(new fabric.Rect({
//  left: 150,
//  top: 150,
//  width: 100,
//  height: 50,
//  fill: '#aaa',
//  originX: 'left',
//  originY: 'top',
//  centeredRotation: true
//}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));
//
//
//canvas.add(new fabric.Rect({
//  left: 200,
//  top: 200,
//  width: 150,
//  height: 50,
//  fill: '#0f0f0f',
//  originX: 'left',
//  originY: 'top',
//  centeredRotation: true
//}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));



fabric.Image.fromURL('images/corner.png', function (oImg) {
  oImg.setLeft(0);
  oImg.setTop(0);
  oImg.set('selectable', false);

  oImg.setScaleX(scale);
  oImg.setScaleY(scale);

  //oImg.setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false});

  parts = new fabric.Group([oImg]);
  canvas.add(parts);
  canvas.renderAll();
});


fabric.Image.fromURL('images/chair-L.png', function (oImg) {
  oImg.setLeft(0);
  oImg.setTop(0);
  oImg.set('selectable', false);

  oImg.setScaleX(scale);
  oImg.setScaleY(scale);

  //oImg.setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false});

  parts = new fabric.Group([oImg]);
  canvas.add(parts);
  canvas.renderAll();
});

fabric.Image.fromURL('images/chair-R.png', function (oImg) {
  oImg.setLeft(0);
  oImg.setTop(0);
  oImg.set('selectable', false);

  oImg.setScaleX(scale);
  oImg.setScaleY(scale);

  //oImg.setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false});

  parts = new fabric.Group([oImg]);
  canvas.add(parts);
  canvas.renderAll();
});


fabric.Image.fromURL('images/loveseat-L.png', function (oImg) {
  oImg.setLeft(0);
  oImg.setTop(0);
  oImg.set('selectable', false);

  oImg.setScaleX(scale);
  oImg.setScaleY(scale);

  //oImg.setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false});

  parts = new fabric.Group([oImg]);
  canvas.add(parts);
  canvas.renderAll();
});

fabric.Image.fromURL('images/loveseat-R.png', function (oImg) {
  oImg.setLeft(0);
  oImg.setTop(0);
  oImg.set('selectable', false);

  oImg.setScaleX(scale);
  oImg.setScaleY(scale);

  //oImg.setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false});

  parts = new fabric.Group([oImg]);
  canvas.add(parts);
  canvas.renderAll();
});


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

canvas.on('object:rotating', function (options) {
  options.target.set({
    angle: Math.round(options.target.angle / 45) * 45
  });
});
