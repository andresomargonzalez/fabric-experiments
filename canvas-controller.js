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

var scale = 0.3;
var scaleMesa = 0.20;
var scaleMesa2 = 0.40;
var imageUrls = ['images/corner.png', 'images/chair-L.png', 'images/chair-R.png', 'images/loveseat-L.png', 'images/loveseat-R.png'];

startup();

// create images to attach on canvas
function createImages() {
  var offsetY = canvasHeight - 500;
  for (var i = 0; i < imageUrls.length; i++) {
    createImagesObjects(imageUrls[i], offsetY);
    offsetY = offsetY + 100;
  }
  function createImagesObjects(url, offsetY) {
    fabric.Image.fromURL(url, function (oImg) {
      oImg.setLeft(5);
      oImg.setTop(offsetY);
      oImg.set('selectable', false);
      oImg.setScaleX(scale);
      oImg.setScaleY(scale);
      parts = new fabric.Group([oImg]);
      parts.set({
        backgroundColor: 'transparent',
        hasControls: false,
        hasBorders: false
      });
      canvas.add(parts);
      canvas.bringToFront(parts)
      draggable(parts);
    });

  }
}

function createPiso() {
  var urlPiso = "http://img11.deviantart.net/efea/i/2006/240/7/a/bg_texture___wood_by_nortago.jpg";
  fabric.Image.fromURL(urlPiso, function (oImg) {
    oImg.setLeft(300);
    oImg.setTop(canvasHeight-300);
    oImg.setWidth(canvasWidth-300);
    oImg.set('selectable', false);
    parts = new fabric.Group([oImg]);
    parts.set({
      hasControls: false,
      hasBorders: false,
      selectable: false
    });

    canvas.add(parts);
    canvas.sendBackwards(parts);
  });
}

function crearMesa() {
  var urlMesa = "http://rosariosofas.com.ar/wp-content/uploads/2015/08/mesamadera1.png";
  fabric.Image.fromURL(urlMesa, function (oImg) {
    oImg.setLeft(5);
    oImg.setTop(100);
    oImg.setScaleX(scaleMesa);
    oImg.setScaleY(scaleMesa);
    parts = new fabric.Group([oImg]);
    parts.set({
      hasControls: false,
      hasBorders: false,
      backgroundColor:'transparent'
    });

    canvas.add(parts);
    draggable(parts);
    canvas.sendBackwards(parts);
  });

}
function crearMesa2() {
  var urlMesa = "http://www.ivope.com/contenidos/articulos/imagen_543_1.png";
  fabric.Image.fromURL(urlMesa, function (oImg) {
    oImg.setLeft(5);
    oImg.setTop(200);
    oImg.setScaleX(scaleMesa2);
    oImg.setScaleY(scaleMesa2);
    parts = new fabric.Group([oImg]);
    parts.set({
      hasControls: false,
      hasBorders: false,
      backgroundColor:'transparent'
    });

    canvas.add(parts);
    draggable(parts);
    canvas.sendBackwards(parts);
  });

}

function crearTitulos() {

  var titulo1 = new fabric.IText("Living tables", {
    fontFamily: 'Indie Flower',
    fontSize: 24,
    fill:'dark blue',
    fontWeight: 'bold',
    left: 100,
    top: 50,
    selectable: false
  });
  canvas.add(titulo1);
  var titulo2 = new fabric.IText("Sofa parts", {
    fontFamily: 'Indie Flower',
    fontSize: 24,
    fill:'dark blue',
    fontWeight: 'bold',
    left: 100,
    top: 350,
    selectable: false,
  });
  canvas.add(titulo2);
  var titulo3 = new fabric.IText("Wall Color", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fontWeight: 'bold',
    left: 6,
    top: 50,
    selectable: false,
  });

  var titulo4 = new fabric.IText("Floor Color", {
    fontFamily: 'Arial',
    fontSize: 16,
    fontWeight: 'bold',
    left: 6,
    top: 50,
    selectable: false,
  });

  var titulo5 = new fabric.IText("Corner", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 220,
    top: 430,
    selectable: false
  });
  canvas.add(titulo5);
  var titulo6 = new fabric.IText("1 body left", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 200,
    top: 530,
    selectable: false
  });
  canvas.add(titulo6);
  var titulo7 = new fabric.IText("1 body right", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 200,
    top: 630,
    selectable: false
  });
  canvas.add(titulo7);
  var titulo8 = new fabric.IText("2 body left", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 200,
    top: 730,
    selectable: false
  });
  canvas.add(titulo8);
  var titulo9 = new fabric.IText("2 body right", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 200,
    top: 830,
    selectable: false
  });
  canvas.add(titulo9);

  var titulo10 = new fabric.IText("First Table", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 215,
    top: 120,
    selectable: false
  });
  canvas.add(titulo10);

  var titulo11 = new fabric.IText("Second Table", {
    fontFamily: 'Indie Flower',
    fontSize: 16,
    fill: 'dark',
    fontWeight: 'bold',
    left: 200,
    top: 220,
    selectable: false
  });
  canvas.add(titulo11);
}



function createToolPanel() {
  var bg = new fabric.Rect({
    left: 0,
    top: 0,
    fill:  "#262626",
    width: 300,
    height: canvasHeight,
    lockRotation: true,
    maxHeight: document.getElementById("fabriccanvas").height,
    maxWidth: document.getElementById("fabriccanvas").width,
    selectable: false
  });
  var bg2 = new fabric.Rect({
    left: 300,
    top: 0,
    fill:  "#262626",
    width: canvasWidth -300,
    height: 50,
    lockRotation: true,
    maxHeight: document.getElementById("fabriccanvas").height,
    maxWidth: document.getElementById("fabriccanvas").width,
    selectable: false
  });
  var shadow = {
    blur: 5,
    offsetX: 0,
    offsetY: 0,
    opacity: 0.9,
    fillShadow: true
  };
  bg.setShadow(shadow);
  bg2.setShadow(shadow);
  canvas.add(bg);
  canvas.add(bg2);
}

// snap to grid
canvas.on('object:moving', function (options) {

  if(options.target.left>=300){
    options.target.set({
      scaleX:3,
      scaleY:3
    });
  }
  options.target.bringToFront();
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
  createToolPanel();
  crearMesa();
  crearMesa2();
  createPiso();
  crearTitulos();
  createImages();

console.log(canvasWidth);
  console.log(canvasHeight);
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  canvas.setBackgroundColor('rgb(229,207,203)');
  canvas.renderAll();
}



function draggable(object) {
  console.log(object);
  object.on('mousedown', function() {
    console.log('clonando');
    object.clone(function(cloned){
      cloned.set({
        hasControls: false,
        hasBorders: false
      });
      canvas.add(cloned);
      draggable(cloned);
    })
  });
  object.on('mouseup', function() {
    // Remove an event handler
    this.off('mousedown');

    // Comment this will let the clone object able to be removed by drag it to menu bar
    // this.off('mouseup');

    // Remove the object if its position is in menu bar
    if(this.left<=300) {
      canvas.remove(this);
    }
  });
}



