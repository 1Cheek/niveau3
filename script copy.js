var myGamePiece;
var myObstacle;

alert("Le niveau suivant va faire intervenir une boule rouge a gauche et une boule verte a droite. Ces deux boules vont entrer en collision non elastique et vont suivre les lois de conservation du mouvement. Le but est qu'elles tombent sur la plaque noir. Bonne chance!")

var a1 = prompt('masse du cube rouge'); //reponse: 1
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
var gspeed = 0
var h1 = prompt('vitesse y des cubes'); //reponse: 11,5
var h = parseFloat(h1, 10)

function startGame() {
    myGamePiece = new component(5, "red", 400, 500, a);
    myObstacle  = new component(5, "green", 600, 500, b);  
    myGoal = new component(30, "black", 100, 600, 0);
    myGameArea.start();
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
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
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
        myGamePiece.y += myGamePiece.speedY + gspeed;
        myObstacle.y += myObstacle.speedY + gspeed;
        myGamePiece.update();
        myObstacle.update();
        myGoal.update();

    } else {
        myGameArea.clear();
        myGamePiece.x += myGamePiece.speedXg;
        myObstacle.x += myObstacle.speedXo;   
        gspeed += g;
        myGamePiece.y += myGamePiece.speedY + gspeed;
        myObstacle.y += myObstacle.speedY + gspeed;
        myGamePiece.update();
        myObstacle.update();
        myGoal.update();
    } if (myGamePiece.crashWith(myGoal)) {
        myGameArea.stop();
        alert("level complete!");
        }
}
