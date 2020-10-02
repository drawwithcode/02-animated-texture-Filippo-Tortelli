function preload(){
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  background(0);
  angleMode(DEGREES);
}

function draw() {
  let squareSize = width/24;

  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {

      let randomColor = noise((1.5*frameCount+x)/200,(1.5*frameCount+y)/100);

      console.log(randomColor);

      noStroke();
      fill(randomColor*122, randomColor*229, randomColor*130);
      square(x,y,squareSize);
    }
  }

  for (let a = squareSize; a < width; a += squareSize) {
    for (let b = squareSize; b < height; b += squareSize) {

      let randomColorDue = noise((1.5*frameCount+a)/100);

      //valori modficati per RGB
      let colorR = 122 + (randomColorDue*(255-122));
      let colorG = 229 + (randomColorDue*(255-229));
      let colorB = 130 + (randomColorDue*(255-130));

      fill(colorR,colorG,colorB);

      let t = squareSize/9;

      quad(a-t*3,b,a,b+t,a+t*3,b,a,b-t);
      quad(a-t,b,a,b+t*3,a+t,b,a,b-t*3);

    }
  }
