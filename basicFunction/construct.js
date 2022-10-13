const nam = "god";
class Polygon {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}

const poly1 = new Polygon("vinay");
const poly2 = new Polygon("pokra");
console.log(Polygon);
console.log(poly1);
console.log(poly2);
