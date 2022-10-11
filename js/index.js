window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let frames = 0;

  function startGame() {
    background();
    setInterval(updateCanvas,20);
    gameCar.draw();
  } 

  function pointText(){
    ctx.font = '14px serif';
    ctx.fillText(`Points: ${Math.floor(frames/10)}`, 100, 100);
  }


  function background() {
    const background = new Image();
    background.src = 'images/road.png';
    ctx.drawImage(background,0,0,250,450); 

  }

  

  
  class Car {
    constructor(){
      this.x = 0;
      this.y = 350;
      this.width = 30;
      this.height = 70;
      const img = new Image();
      this.img = img;
      img.src='images/car.png'
    }

      moveLeft(){
        this.x-=10;
        if(this.x<=0){
          this.x=0;
        }
      };

      moveRight(){
        this.x+=10
        if(this.x>=220){
          this.x=220;
        }
    
      }


      draw() {
        ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
      }
  }

  function clearCanvas(){
    ctx.clearRect(0,0,300,300);
    
  } 

  function updateCanvas() {
    background();
    updateObstacles();
    gameCar.draw();
    pointText();
    
  }


  const gameCar = new Car;
  
  
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        gameCar.moveLeft();
        break;
      case 39:
        gameCar.moveRight();
        break;
    }
   updateCanvas();
  });

  class Obstacle {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }
    

    // randomWidth(){
    //   let minWidth = 20;
    //   let maxWidth = 400;
    //   this.width = Math.floor(Math.random()*maxWidth-minWidth+1)+minWidth;
    //   return this.width;
    // }

    // randomX(){
    //   let maxValueOfX = 100;
    //   this.x = Math.floor(Math.random()*maxValueOfX + 1)
    //   return this.x;
    // }

    // obstacle() {
    //   ctx.fillStyle = 'red';
    //   ctx.fillRect(this.randomWidth(),100,this.randomX(),10)
    // }

    update(){
      ctx.fillStyle = 'red';
      ctx.fillRect(this.x,this.y,this.width,this.height);
    }    
  }

  // let testObstacle = new Obstacle;

  let myObstacles = [];

  // function createObstacles(){
  //   myObstacles.push(new Obstacle);
  //   for (let i = 0; i < myObstacles.length; i++){
  //     let tempObstacle = myObstacles[i].obstacle();
  //     return tempObstacle;
  //   }
  //   for (let i = 0; i<myObstacles.length;i++){
  //     myObstacles[i].y-=1;  
  //   }
  //   myObstacles[i].update();
  // }

  function updateObstacles(){
    frames += 1;
    if (frames % 120===0){
      let maxValueOfX = 100;
      let x = Math.floor(Math.random()*maxValueOfX + 1);
      let height = 20;
      let minWidth = 20;
      let maxWidth = 170;
      let width = Math.floor(Math.random()*maxWidth-minWidth+1)+minWidth;
      myObstacles.push(new Obstacle(width,height,'red',x,100));

      
    }
    for(i=0;i < myObstacles.length; i++){
      myObstacles[i].y+=1;
      myObstacles[i].update();
    }
   
  }


};
  


