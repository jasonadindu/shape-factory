'use strict';

let presentShapeTypeChosen = null;
let presentShapeColorChosen = null;

class FactoryStore {
  constructor() {
    this.shapes = [];
  }

  createShape(shapeType, shapeColor) {
    console.log('create shape called')
    let newShape = new Shape(shapeType, shapeColor)
    this.shapes.push(newShape);
    this.showNewShape();
   
  }

  showNewShape(){
    let shapesCount = this.shapes.length;   
    console.log('show new shape called') ; 

    if (shapesCount <= 20) {
      console.log('while loop called');
      console.log(shapesCount);

      let tileToChange = document.getElementById(`factory-space-${shapesCount}`);
      tileToChange.classList.add(`color-${presentShapeColorChosen}`);
      if (presentShapeTypeChosen == 'circle') {
        tileToChange.classList.add('circle');
      }


    };
    
    
  };

  getShapeInfo(id) {    
    let chosenShape = this.shapes.findIndex(aShape => aShape.id === id);
    let chosenShapeInfo = {shapeColor : chosenShape.color, shapeColor : chosenShape.type };
    console.log(chosenShapeInfo)
    return chosenShapeInfo;
  }  
}

const factoryStore = new FactoryStore; 

class Shape {
  constructor (type, color) {
    this.id = 0;
    this.type = type;
    this.color = color;
   
  }
}



document.getElementById("shape-type").addEventListener('change', (e) => {
  presentShapeTypeChosen = e.target.value
  console.log(e.target.value);
});

document.getElementById("shape-color").addEventListener('change', (e) => {
  presentShapeColorChosen = e.target.value;
  console.log(e.target.value);
});

document.getElementById("create-new-shape").addEventListener('click', (e) => {  
  if (presentShapeColorChosen !== null || presentShapeTypeChosen !== null) {
    factoryStore.createShape(presentShapeTypeChosen, presentShapeColorChosen);
    
  }
});