
var snake = {x: 10, y: 11};
var xMove = 5;
var yMove = 0;
var food = {x: 0, y: 0, is: false, number: 0};



function checkCollision(){
    var canvas= document.getElementById('Canvas');

    //check snake.x if have collision with left border
    if(snake.x < 2){
        return 1;
    }

    //check snake.x if have collision with right border
    if(snake.x > canvas.width-15){
        return 1;
    }
    
    //check snake.y if have collision with top border
    if(snake.y < 2){
        return 1;
    }

    //check snake.y if have collision with bottom border
    if(snake.y > canvas.height-15){
        return 1;
    }
    
    
}


function createFood(ctx){
    var canvas= document.getElementById('Canvas');
    food.x = Math.floor((Math.random()*(canvas.width-10))+5);
    food.y = Math.floor((Math.random()*(canvas.height-10))+5);
    ctx.fillStyle="rgb(0,200,0)";
    ctx.fillRect(food.x,food.y,6,6);
    food.is = true;

}

function checkEat(ctx){
    console.log(snake);
    console.log(food);
    if((snake.x <= food.x+6 && snake.x+15 >= food.x) &&
       (snake.y <= food.y+6 && snake.y+15 >= food.y)){
        food.is = false;
        food.number++;
        ctx.fillStyle="rgb(255,255,255)";
        ctx.fillRect(food.x,food.y,6,6);
        
    }
    

}

function movement(ctx){
    //clear old snake
    ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(snake.x,snake.y,15,15);
    //create new snake
    ctx.fillStyle="rgb(200,0,0)";
    snake.x+=xMove;
    snake.y+=yMove;
    ctx.fillRect(snake.x,snake.y,15,15);
    if(food.is == false){
        createFood(ctx);
    }
    else{
        checkEat(ctx);
    }


    var output = document.addEventListener('keydown', (event)=>{
    
        switch(event.keyCode){
            //left
            case 37:
                xMove = -5;
                yMove = 0;
                break;
            //up
            case 38:
                xMove = 0;
                yMove = -5;   
                break;
            //right
            case 39:    
                xMove = 5;
                yMove = 0;
                break;
            //down
            case 40:
                xMove = 0;
                yMove = 5;
                break;
            //end of snake with ESC
            case 27:
                //TODO
     //           console.log('ESC');
       //         return 100;          
        }

    });

    
    //end of setInterval - doesnt work
    //TODO

   // if(output == 100){
        //console.log("END");
        //return 'end';
   // }

    var collision = checkCollision();
    if(collision == 1){
        console.log("collision", food.number);

        return 'end';
    }

    
}


function backGround(){
    document.getElementById('main').style.background='none';
    document.getElementById('mainScreen').style.background = 'none';
    document.getElementById('mainScreen').style.backgroundColor='88A701';
}


function gameStart(ctx){
    var interval = window.setInterval(function(){if(movement(ctx) == 'end'){clearInterval(interval);} }, 30);
    return;
}

function showTime(){
    
        var today = new Date();
        document.getElementById('seconds').innerHTML = today.getSeconds();
        document.getElementById('minutes').innerHTML = today.getMinutes();
        document.getElementById('hours').innerHTML = today.getHours();
            
}


function play_function(){
    //deleting every elements in site
    var pageElements = document.getElementsByClassName('menu');
    for(i = 0; i < pageElements.length; i ++){
        pageElements[i].style.display = 'none';
        console.log(pageElements[i])
    }   

    //change background
    backGround();

    //create playGround
    document.getElementById("Canvas").style.display = 'initial';
    var canvas= document.getElementById('Canvas');
    var screenWidth = screen.width-220;
    var screenHeight = screen.height-320;
    canvas.width=screenWidth;
    canvas.height=screenHeight;
    var ctx = canvas.getContext("2d");
    
    //call function gameStart
    gameStart(ctx);

    
    

}
