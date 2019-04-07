// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(props) {
        super(props);
    }
    // Method that returns true if the object has six sides with an equal surface area which is the definition of a cube
    checkIfCube() {
        return (this.length == this.width && this.length == this.height && this.width == this.height);
    }
}

// Instiating a cube object that does not have equal surface areas on all six sides
const thisIsNotACube = new CubeMaker({
    length: 1,
    width: 2,
    height: 3
});

// Expecting this test to return false since the object is not a cube
console.log(thisIsNotACube.checkIfCube());

// Instiating a cube object with equal surface areas on all six sides
const thisIsARealCube = new CubeMaker({
    length: 1,
    width: 1,
    height: 1
});

//Testing the checkIfCube(), volume() and surfaceAre() methods for thisIsARealCube
console.log(thisIsARealCube.checkIfCube()); // true
console.log(thisIsARealCube.volume()); // 1
console.log(thisIsARealCube.surfaceArea()); // 6