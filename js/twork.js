// Make an instance of two and place it on the page.
//width: window.innerWidth, height: window.innerHeight
var two = new Two({ fullscreen: true }).appendTo(document.body);
var circle = two.makeCircle(-70, 0, 50);
var circle2 = two.makeCircle(-90, 5, 10);
//var rect = two.makeRectangle(70, 0, 100, 100);
circle.fill = '#FF8000';
circle2.fill = 'rgba(0, 200, 255, 0.75)';
//rect.fill = 'rgba(0, 200, 255, 0.75)';

var group = two.makeGroup(circle, circle2);
group.translation.set(two.width / 2, two.height / 2);
group.scale = 0;
group.noStroke();

// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
  }
  var t = (1 - group.scale) * 0.125;
  group.scale += t;
  group.rotation += t * 4 * Math.PI;
}).play();  // Finally, start the animation loop

//Curves

// Make an instance of two and place it on the page.
//width: window.innerWidth, height: window.innerHeight
var two = new Two({ fullscreen: true }).appendTo(document.body);
var curve = two.makeCurve(110, 100, 120, 50, 140, 150, 160, 50, 180, 150, 190, 100, true);
curve.linewidth = 2;
curve.scale = 1.75;
curve.rotation = Math.PI / 2; // Quarter-turn
curve.noFill();
var line = two.makeLine(10, 10, 110, 210);
line.linewidth = 10;
line.stroke = "rgba(255, 0, 0, 0.5)";
//var rect = two.makeRectangle(70, 0, 100, 100);
curve.fill = '#FF8000';

//rect.fill = 'rgba(0, 200, 255, 0.75)';

var group = two.makeGroup(curve, line);
group.translation.set(two.width / 2, two.height / 2);
group.scale = 0;
group.noStroke();

// Bind a function to scale and rotate the group
// to the animation loop.
two.bind('update', function(frameCount) {
  // This code is called everytime two.update() is called.
  // Effectively 60 times per second.
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
  }
  var t = (1 - group.scale) * 0.125;
  group.scale += t;
  group.rotation += t * 4 * Math.PI;
}).play();  // Finally, start the animation loop
