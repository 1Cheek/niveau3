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






    
   delete myGameArea
   delete myObstacle
   delete myGoal
   
  myGameArea.clear();
   myGamePiece = new component(5, "red", 400, 500, a);
    myObstacle  = new component(5, "green", 600, 500, b);  
    myGoal = new component(30, "black", 100, 600, 0);
    updateGameArea()
  
    
    
}
function startGame() {
    myGamePiece = new component(50, "red", 400, 500, a);
    myObstacle  = new component(5, "green", 600, 500, b);  
    myGoal = new component(30, "black", 100, 600, 0);
    myGameArea.start();

    myObstacle.speedYv = -vyv
    quad();
}

const img = document.createElement("img");
img.src="https://media.istockphoto.com/id/1060000540/fr/vectoriel/sans-couture-papier-millim%C3%A9tr%C3%A9.jpg?s=612x612&w=0&k=20&c=iQFTbfglCrqxj8Y9O2ua8iaCAVrhfJUTYjIVQ0qDXSU="

function quad() {
    let adb = myGameArea.context;
    adb.drawImage(img,0,0,1000,1000);
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
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        quad();
    },
    stop : function() {
        clearInterval(this.interval);
    }
}


function component(radius, color, x, y, m) {
    
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
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI,false);
    ctx.lineWidth = 2;
    ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.stroke();
    
    
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x-this.r;
        var myright = this.x+this.r;
        var mytop = this.y-this.r;
        var mybottom = this.y + (this.r);
        var otherleft = otherobj.x-otherobj.r;
        var otherright = otherobj.x + (otherobj.r);
        var othertop = otherobj.y-otherobj.r;
        var otherbottom = otherobj.y + (otherobj.r);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    if (myGamePiece.crashWith(myObstacle)) {
        myGameArea.clear();
        myGamePiece.x += myGamePiece.speedF;
        myObstacle.x += myObstacle.speedF;
        gspeed += g;
        myGamePiece.y += (myGamePiece.speedY + gspeed);
        myObstacle.y += (myObstacle.speedY + gspeed);
        myGamePiece.update();
        myObstacle.update();
        myGoal.update();
        console.log()

    } else {
        let distancerr = Math.sqrt(Math.pow(myGamePiece.x-myObstacle.x,2)+Math.pow(myGamePiece.y-myObstacle.y,2))
        
        let angledeg = Math.atan2(myGamePiece.y -myObstacle.y, myGamePiece.x -myObstacle.x) * 180 / Math.PI
        let coulomb = 9 * Math.pow(10,3) //10 à la 9
        let Felec =  (coulomb * cv * cr / Math.pow(distancerr,2))
        
        
        myGameArea.clear();
        
        ctx = myGameArea.context;
        ctx.beginPath();
        ctx.moveTo(myObstacle.x, myObstacle.y);
        ctx.lineTo(myObstacle.x + Math.cos(Math.PI * angledeg/180)*distancerr, myObstacle.y + Math.sin(Math.PI * angledeg/180)*distancerr);
        ctx.stroke(); 

        myGamePiece.x += myGamePiece.speedXg 
        myObstacle.x += myObstacle.speedXo
        
        gspeed += g;


        myGamePiece.speedXg += -(Math.cos(Math.PI*((-angledeg)+180)/180)*Felec)/myGamePiece.m;
        myObstacle.speedXo += (Math.cos(Math.PI*((-angledeg)+180)/180)*Felec)/myObstacle.m; 
        
        myGamePiece.y += myGamePiece.speedYr 
        myObstacle.y += myObstacle.speedYv 
        
        myGamePiece.speedYr += gspeed + (Math.sin(Math.PI*((-angledeg)+180)/180)*Felec)/myGamePiece.m;
        myObstacle.speedYv += gspeed - (Math.sin(Math.PI*((-angledeg)+180)/180)*Felec)/myObstacle.m;
        
        
        myGamePiece.update();
        myObstacle.update();
        myGoal.update();
        console.log(myGamePiece.m) // -angledeg+180
    } if (myGamePiece.crashWith(myGoal)) {
        myGameArea.stop();
        // alert("level complete!dddchanged");
        }
}
