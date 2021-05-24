var database, ball1, position;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball1= createSprite(200,200,10,10);
    ball1.shapeColor= "grey";
    var ball1position=database.ref('ball/position');
    ball1position.on('value',readposition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}
function readposition(data){
    position=data.val();
    ball1.x=position.x;
    ball1.y=position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({'x':position.x+x,'y':position.y+y})
}
function showError(){
   console.log("error");
}