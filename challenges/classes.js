// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerClass{
    constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  } 
  


  const classicCuboid = new CuboidMakerClass({
    length: 4,
    width: 5,
    height: 5
  })
  





// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log("---classes---");
console.log(classicCuboid.volume()); // 100
console.log(classicCuboid.surfaceArea()); // 130
console.log("---end classes---");





console.log("")
console.log("------------stretch------------")
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
//  Find out the formulas for volume and surface area for cubes and create those methods 
//using the dimension properties from CuboidMaker.  
//Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMakerClass{
    constructor(cubeAttrs){
        super(cubeAttrs);

    }
    volume(){
        return `The volume is ${(this.length * this.width * this.height)} units.`        
    }
    cubeSurfaceArea(){
        return `The surface area is ${(2*this.length*this.width) + (2*this.width*this.height) + (2*this.length*this.height)} units.`;
    }
}


const myCube = new CubeMaker({
    length: 10,
    width: 12,
    height: 52
  })

  console.log(myCube);
  console.log(myCube.volume());
  console.log(myCube.cubeSurfaceArea());
