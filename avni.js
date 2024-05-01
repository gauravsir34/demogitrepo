let name =avntika;

let myname =raju;


function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "madannnananda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); // "Honda"
  myFunc(mycar);
  console.log(mycar.make); // "Toyota"