

var myGamePiece;
var myObstacle;

// alert("Le niveau suivant va faire intervenir une boule rouge a gauche et une boule verte a droite. Ces deux boules vont entrer en collision non elastique et vont suivre les lois de conservation du mouvement. Le but est qu'elles tombent sur la plaque noir. Bonne chance!")


/** var a1 = prompt('masse du cube rouge'); //reponse: 1
var a = parseFloat(a1, 10);
var b1 = prompt('masse du cube vert'); //reponse: 5
var b = parseFloat(b1, 10);
var c1 = prompt('vitesse x du cube rouge'); //reponse:6
var c = parseFloat(c1, 10);
var d1 = prompt('vitesse x du cube vert'); //reponse: -11,5
var d = parseFloat(d1, 10);
var z = (a*c+b*d)/(a+b)
var g1 = prompt('accélération gravitationelle'); //reponse: 0,5
var g = parseFloat(g1, 10);
**//**  
var h1 = prompt('vitesse y des cubes'); //reponse: 11,5
var h = parseFloat(h1, 10) **/
let a = parseFloat(document.getElementById("mr").value)
let b = parseFloat(document.getElementById("mv").value)
let c = parseFloat(document.getElementById("vr").value)
let d = parseFloat(document.getElementById("vv").value)
let z = (a*c+b*d)/(a+b)
let g = parseFloat(document.getElementById("varg").value)
let cr = parseFloat(document.getElementById("cr").value)
let cv = parseFloat(document.getElementById("cv").value)

let h = parseFloat(document.getElementById("ycubes").value)
let vyr = parseFloat(document.getElementById("vyr").value)
let vyv = parseFloat(document.getElementById("vyv").value)


let gspeed = 0

function objects() {
    gameObjects = [
        myGamePiece = new component(100, "yellow", 400, 1450, a,d,vyv),
        myObstacle  = new component(100, "green", 600, 1450, b,c,vyr),
        
        
            new component(100, "black", -400, 1450, 1,0,0),
        ]
}





function restartGame() {
a = parseFloat(document.getElementById("mr").value)
b = parseFloat(document.getElementById("mv").value)
c = parseFloat(document.getElementById("vr").value)
d = parseFloat(document.getElementById("vv").value)
z = (a*c+b*d)/(a+b)
g = parseFloat(document.getElementById("varg").value)
h = parseFloat(document.getElementById("ycubes").value)
cr = parseFloat(document.getElementById("cr").value)
cv = parseFloat(document.getElementById("cv").value)

vyr = parseFloat(document.getElementById("vyr").value)
vyv = parseFloat(document.getElementById("vyv").value)  

myObstacle.speedYv = -vyv 

gspeed = 0

objects()





    
   delete myGameArea
   delete myObstacle
   delete myGoal
   
  myGameArea.clear();
  
    updateGameArea()
  
    
    
}
function startGame() {
    objects()
    myGameArea.start();
    

    myObstacle.speedYv = -vyv
    
    quad();
    ctx = myGameArea.context;
    ctx.scale(0.4, 0.4)
    ctx.translate(600, 400);
}

const img = document.createElement("img");
img.src="https://media.istockphoto.com/id/1060000540/fr/vectoriel/sans-couture-papier-millim%C3%A9tr%C3%A9.jpg?s=612x612&w=0&k=20&c=iQFTbfglCrqxj8Y9O2ua8iaCAVrhfJUTYjIVQ0qDXSU="

function quad() {
    let adb = myGameArea.context;
    
   
  }
  // chaque carre est de 25 pixel par 25 pixel

var myGameArea = {
    canvas : document.getElementById("canvas"),
    start : function() {
        this.context = this.canvas.getContext("2d");
       //  document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 10);
        
    },
    clear : function() {
        this.context.clearRect(-900, -900, 10000, 10000);
        quad();
    },
    stop : function() {
        clearInterval(this.interval);
    }
}


function component(radius, color, x, y, m,vx,vy) {
    
    this.r= radius
    this.color =color
    this.speedXg = c;
    this.speedXo = d;
    this.speedY = -h;
    this.speedYr = -vyr;
    this.speedYv = -vyv
    this.speedF = z; 
    this.x = x;
    this.y = y;    
    this.m = m;
    this.vx = vx;
    this.vy = vy;
    this.isColliding = false;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = ctx.fillStyle = this.isColliding?'#ff8080':this.color;;
        ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI,false);
    ctx.lineWidth = 2;
    ctx.fill();
      ctx.strokeStyle = 'blue';
      ctx.stroke();
    

    this.vy += g
    this.x += this.vx
    this.y += this.vy
    }
  
  
}



function updateGameArea() {
   
       


        let distancerr = Math.sqrt(Math.pow(myGamePiece.x-myObstacle.x,2)+Math.pow(myGamePiece.y-myObstacle.y,2))
        
        let angledeg = Math.atan2(myGamePiece.y -myObstacle.y, myGamePiece.x -myObstacle.x) * 180 / Math.PI
        let coulomb = 9 * Math.pow(10,3) //10 à la 9
        let Felec =  (coulomb * cv * cr / Math.pow(distancerr,2))
        
        
        myGameArea.clear();
        
        ctx = myGameArea.context;
       
 
    for (let i = 0; i < gameObjects.length; i++) {
        gameObjects[i].update();
    }

 
function circleIntersect(x1, y1, r1, x2, y2, r2) {

        // Calculate the distance between the two circles
        let squareDistance = (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
    
        // When the distance is smaller or equal to the sum
        // of the two radius, the circles touch or overlap
        if (squareDistance <= ((r1 + r2) * (r1 + r2))) {
            console.log('yes')
            return squareDistance
            
        }
        
        
    }
       
    

function detectCollisions(){
        let obj1;
        let obj2;
    
        // Reset collision state of all objects
        for (let i = 0; i < gameObjects.length; i++) {
            gameObjects[i].isColliding = false;
        }
    
        // Start checking for collisions
        for (let i = 0; i < gameObjects.length; i++)
        {
            obj1 = gameObjects[i];
            for (let j = i + 1; j < gameObjects.length; j++)
            {
                obj2 = gameObjects[j];
    
                // Compare object1 with object2
                if (circleIntersect(obj1.x, obj1.y, obj1.r, obj2.x, obj2.y, obj2.r)){
                    obj1.isColliding = true;
                    obj2.isColliding = true;
                    
                    let vCollision = {x: obj2.x - obj1.x, y: obj2.y - obj1.y};
    
                    let distance = Math.sqrt((obj2.x-obj1.x)*(obj2.x-obj1.x) + (obj2.y-obj1.y)*(obj2.y-obj1.y));
                
                    let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
                
                    let vRelativeVelocity = {x: obj1.vx - obj2.vx, y: obj1.vy - obj2.vy};
                   
            let speedd = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
            

            
obj1.vx -= (obj1.m/(obj1.m+obj2.m)*  vCollisionNorm.x);
obj1.vy -= (obj1.m/(obj1.m+obj2.m)* vCollisionNorm.y);
obj2.vx += (obj2.m/(obj2.m+obj1.m)*  vCollisionNorm.x);
obj2.vy += (obj2.m/(obj2.m+obj1.m)* vCollisionNorm.y);




//((obj1.vx*(obj1.m-obj2.m)+2*obj2.m*obj1.m)/(obj1.m+obj2.m))
//((obj2.vx*(obj2.m-obj1.m)+2*obj1.m*obj2.m)/(obj2.m+obj1.m))


                }
            }
        }

      





        
} 
detectCollisions();

function detectEdgeCollisions()
 {
    let restitution = 0.90
     let obj;
     
     for (let i = 0; i < gameObjects.length; i++)
     {
         obj = gameObjects[i];

       

         // Check for bottom and top
         if (obj.y + obj.r >= 1600){
             obj.vy = -Math.abs(obj.vy) * restitution;
             
             
          }
          if (obj.y - obj.r <= -400){
            obj.vy = Math.abs(obj.vy) * restitution;
            
            
         }
         if (obj.x + obj.r >= 1400){
            obj.vx = -Math.abs(obj.vx) * restitution;
            
            
         }
         if (obj.x - obj.r <= -600){
            obj.vx = Math.abs(obj.vx) * restitution;
            
            
         }
         
    if (obj.y + obj.r >= 1600) {
        obj.y = 1600-obj.r
    }
    
   }
     }

detectEdgeCollisions()
       



        ctx.beginPath()
        ctx.moveTo(0-600,-400);
        //ctx.lineTo(800/0.4 -600,800/0.4-400) ;
        
        ctx.stroke()



        ctx.beginPath();
        ctx.moveTo(myObstacle.x, myObstacle.y);
        // ctx.lineTo(myObstacle.x + Math.cos(Math.PI * angledeg/180)*distancerr, myObstacle.y + Math.sin(Math.PI * angledeg/180)*distancerr);
        ctx.lineTo(myGamePiece.x, myGamePiece.y);
        ctx.stroke(); 
  /** 
        myGamePiece.x += myGamePiece.speedXg 
        myObstacle.x += myObstacle.speedXo
        
        gspeed += g;


        myGamePiece.speedXg += -(Math.cos(Math.PI*((-angledeg)+180)/180)*Felec)/myGamePiece.m;
        myObstacle.speedXo += (Math.cos(Math.PI*((-angledeg)+180)/180)*Felec)/myObstacle.m; 
        
        myGamePiece.y += myGamePiece.speedYr 
        myObstacle.y += myObstacle.speedYv 
        
        myGamePiece.speedYr += gspeed + (Math.sin(Math.PI*((-angledeg)+180)/180)*Felec)/myGamePiece.m;
        myObstacle.speedYv += gspeed - (Math.sin(Math.PI*((-angledeg)+180)/180)*Felec)/myObstacle.m;
        
        
        console.log() // -angledeg+180
    **/
    } 

