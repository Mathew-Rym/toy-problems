class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
    }
  }
  
 
  const radius = parseFloat(prompt("Enter cylinder radius:"));
  const height = parseFloat(prompt("Enter cylinder height:"));
  const cylinder = new Cylinder(radius, height);
  console.log(`Cylinder Volume: ${cylinder.getVolume()}`);
  