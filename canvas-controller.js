/**
 * Created by Omar on 4/21/16.
 */
var canvas = new fabric.Canvas('c', {
  selection: false
});
var grid = 5;
var canvasWidth = 600;

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

canvas.add(new fabric.Rect({
  left: 50,
  top: 50,
  width: 50,
  height: 50,
  fill: '#faa',
  originX: 'left',
  originY: 'top',
  centeredRotation: true
}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));



canvas.add(new fabric.Rect({
  left: 100,
  top: 100,
  width: 50,
  height: 100,
  fill: '#000',
  originX: 'left',
  originY: 'top',
  centeredRotation: true,
  /*hasControls: false,*/
}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));


canvas.add(new fabric.Rect({
  left: 150,
  top: 150,
  width: 100,
  height: 50,
  fill: '#aaa',
  originX: 'left',
  originY: 'top',
  centeredRotation: true
}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));


canvas.add(new fabric.Rect({
  left: 200,
  top: 200,
  width: 150,
  height: 50,
  fill: '#0f0f0f',
  originX: 'left',
  originY: 'top',
  centeredRotation: true
}).setControlsVisibility({'tl': false, 'tr': false, 'br': false, 'bl': false, 'ml': false, 'mt': false, 'mr': false, 'mb': false}));


// snap to grid

canvas.on('object:moving', function (options) {

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
