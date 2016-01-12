function Effect(shape) {
      this.shape = shape;
      this.x = 0;
    }
var square = new Effect("sq");

var two = new Two({ width: 800, height: 800 }).appendTo(document.body);
var background = two.makeRectangle(two.width/2, two.height/2, two.width, two.height);



var orX = two.width/2;
var orY = two.height/2;
background.fill= 'rgba(255, 255, 255)';

var circle = two.makeCircle(0, 0, 50);
//var circle2 = two.makeCircle(-70, 0, 100);
var cir1RGB = [50, 0, 100];
circle.fill = 'rgb('+ cir1RGB.toString()+')';
var cir1StRGB = [0, 50, 100];
circle.stroke = 'rgb('+ cir1StRGB.toString()+')';
//circle2.fill = 'rgba(0, 200, 255, 0.75)';
//circle2.stroke = '#1C75BC';

// Groups can take an array of shapes and/or groups.
var group = two.makeGroup(circle);

var mult = 1;
var colormult = 1;
var dirmult = 1;
// And have translation, rotation, scale like all shapes.
group.rotation = Math.PI;
group.scale = 0.75;

// You can also set the same properties a shape have.

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
  if(e.keyCode == 32){
   // user has pressed space
   dirmult = dirmult*-1;
  }

  if(e.keyCode == 66){
    if (cir1RGB[1] <= 0){
      cir1RGB[1] = 0;
      cir1StRGB[0] = 0;
      colormult*=-1;
    } 
    else if (cir1RGB[1] >= 255) {
      cir1RGB[1] = 255;
      cir1StRGB[0] = 255;
      colormult*=-1;
    }
    cir1RGB[1]+=10*colormult;
    cir1StRGB[0]+=10*colormult;
  }
}
// Bind a function to scale and rotate the group
// to the animation loop.
var num = 7;
var angle = 0;
var color = 0;

two.bind('update', function(frameCount) {
  circle.fill = 'rgb('+ cir1RGB.toString()+')';
  circle.stroke = 'rgb('+ cir1StRGB.toString()+')';
  group.translation.set(orX + Math.sin(angle)*200, orY + Math.cos(angle)*1);
  angle+= 1/60*dirmult; 
  group.linewidth = num;
  num+= mult;
  if (num > 50 || num < 7){
    mult = mult *-1;
  }
  
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  //var t = (1 - group.scale) * 0.125 *mult;
  //group.scale += t;
  //group.rotation += 1/60;
}).play();  // Finally, start the animation loop
two.update();