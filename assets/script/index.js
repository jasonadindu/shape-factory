'use strict';

class FactoryStore {
    constructor() {
      this.shapes = [];
    }
  
    createShape(shapeType, shapeColor) {
      console.log('create shape called')
      let newShape = new Shape(shapeType, shapeColor)
      this.shapes.push(newShape);
      this.updateFactoryStore();
     
    }
  
    updateFactoryStore(){
      let shapesCount = this.shapes.length;   
      console.log('update factory called') ; 
      
      this.shapes.forEach(presentShape => {
        console.log(presentShape.color)
        document.getElementById('factory-space-1').style.backgroundColor = 'red';
  
      });
  
      //console.log(document.getElementById('factory-space-1').style.backgroundColor);    
  
  
       /* for (let i = shapesCount; i <= 0; i--) {
        shapes.forEach(presentShape => {
          document.getElementsByClassName(`factory-space-${i}`).style.backgroundColor = presentShape.color;
          if (presentShape.color == 'circle')
          document.getElementsByClassName(`factory-space-${i}`).setAttribute('id', 'circle');        
        });
      }  */
  
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
  
  let presentShapeTypeChosen = null;
  let presentShapeColorChosen = null;
  
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