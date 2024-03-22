let climateData;
let testData;
let totalDataRows;
let climateColor;
let climateTemp;
let climateYear;
let colorValues = [];


function preload() {
  //includes file path, file type, and header so we have access to the data colunms and we don't put our lables in the dataviz 
  climateData = loadTable('data/climateColors.csv', 'csv', 'header');
}


function setup() {
  createCanvas(windowWidth, windowHeight); //using window size to give us more space
  background(220);
  
//   //testing if the data is actually loaded and working
//   testData = climateData.getArray(); //makes an array of all our data
//   console.log(testData); //logs our array to the console 
  
  // //testing how many rows of data and that it's getting all data
  // totalDataRows = climateData.getRowCount();
  // console.log(totalDataRows);
  
  // //test one data point
  // climateColor = climateData.getString(2, "hex");
  // console.log(climateColor)
  
  // //test data to shape
  // climateTemp = climateData.getNum(2, "temp");
  // circle(100, 100, climateTemp * 100)
  
  
}

function draw() {
  
  // loops through all the data and adds data from each column to a variable
  for(let i =0; i < climateData.getRowCount(); i++) {
    //giving a margin and using the spacing from our previous y value
    let yStart = 20 + i * 20; 
    //giving a bottom margin and using the number of rows mutiplied by space in between from above
    let yStop = 20 + 40 * 20;
    
    // let xStart = 20 + i * 20;
    // let xStop = 20 + 40
    
    let yPos = map(yStart, 0, yStop, 0, windowHeight);
    let xPos = map(yStart, 0, yStop, 30, windowWidth);
    
     climateYear = climateData.getString(i, "year");
     climateTemp = climateData.getNum(i, "temp");
     colorValues.push("#" + climateData.getString(i, 'hex'));
     
    text(climateYear, 10, yPos); 
    
    //had to add push & pop so circle color doesn't affect text color because the draw loop
     push()
     fill(colorValues[i])
  
    drawFlower(xPos - 5, yPos - 5, climateTemp * 25)
     // circle(xPos - 5, yPos - 5, climateTemp * 25);
     pop()
    
    // //dist calculates the distance between points
    // if(dist(mouseX, mouseY, xPos, yPos) < 5) {
    //   // console.log("hover") //test that hover works
    //   push()
    //   // fill("black");
    //   // //test hover
    //   // text(climateTemp, mouseX, mouseY);
    //   drawFlower(mouseX, mouseY, climateTemp * 30)
    //   pop()
    // }
    
    //test drawFlower
//     drawFlower(100, 100, 50)
    
  }
  
  
  function drawFlower(flowerX, flowerY, petalSize) {
  push();
  let petalDistance = petalSize / 2;

  stroke("black"); 

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // center petal
  circle(flowerX, flowerY, petalSize);
    pop();
}
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}