
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
    //creating food
    var canvas= document.getElementById('Canvas');
    food.x = Math.floor((Math.random()*(canvas.width-25))+5);
    food.y = Math.floor((Math.random()*(canvas.height-25))+5);
    ctx.fillStyle="rgb(0,0,0)";
    ctx.fillRect(food.x,food.y,8,8);
    

    ctx.fillStyle="rgb(0,200,0)";
    ctx.fillRect(food.x+2,food.y+2,4,4);
    food.is = true;

}

function checkEat(ctx){

    //condition if snake eats the food
    if((snake.x <= food.x+8 && snake.x+15 >= food.x) &&
       (snake.y <= food.y+8 && snake.y+15 >= food.y)){
        food.is = false;
        food.number++;
        ctx.fillStyle="rgb(255,255,255)";
        ctx.fillRect(food.x,food.y,8,8);

        //change score in user website
        document.getElementById('scoreNumber').innerHTML = food.number;
        
        //winning of the game
        if(food.number == 10){
            return 1;
        } 
        
    }
    

}

function movement(ctx){
    //clear old snake
    ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(snake.x,snake.y,15,15);

    //create new snake
    ctx.fillStyle="rgb(0,0,0)";
    snake.x+=xMove;
    snake.y+=yMove;
    ctx.fillRect(snake.x,snake.y,15,15);
    
    ctx.fillStyle="rgb(200,0,0)";
    ctx.fillRect(snake.x+2,snake.y+2,11,11);
    

    if(food.is == false){
        createFood(ctx);
    }
    else{
        //winning of the game
        if(checkEat(ctx) == 1){
            ctx.fillStyle="rgb(0,200,0)";
            ctx.font="100px Arial";
            ctx.fillText("You won the game!", 200, 200);
            document.getElementById('restart').style.display = 'inline-block';

            return 'end';
        }
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
        }

    });

    
    
    var collision = checkCollision();
    if(collision == 1){
        console.log("collision", food.number);

        //Losing message
        ctx.fillStyle="rgb(200,0,0)";
        ctx.font="100px Arial";
        ctx.fillText("You lost the game!", 200, 200);
        document.getElementById('restart').style.display = 'inline-block';
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
        let seconds = today.getSeconds();
        let minutes = today.getMinutes();
        let hours   = today.getHours();

        if(seconds < 10){
            seconds = '0'+seconds;
        }

        if(minutes < 10){
            minutes = '0'+minutes;
        }

        if(hours < 10){
            hours = '0'+hours;
        }
        
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('hours').innerHTML = hours;
            
}


function play_function(){
    //deleting every elements in site
    var pageElements = document.getElementsByClassName('menu');
    for(i = 0; i < pageElements.length; i ++){
        pageElements[i].style.display = 'none';
        console.log(pageElements[i])
    }   
    //display none - restart button
    document.getElementById('restart').style.display = 'none';

    //clear global variables if restart button is pressed
    snake = {x: 10, y: 11};
    xMove = 5;
    yMove = 0;
    food = {x: 0, y: 0, is: false, number: 0};

    //change background
    backGround();

    //create playGround
    document.getElementById("Canvas").style.display = 'initial';
    var canvas= document.getElementById('Canvas');
    var screenWidth = screen.width-220;
    var screenHeight = screen.height-400;
    canvas.width=screenWidth;
    canvas.height=screenHeight;
    var ctx = canvas.getContext("2d");

    //nadpis
    document.getElementById("nadpis").style.paddingTop = "40px";
    //score
    document.getElementById('score').style.display = 'inline-block';
    
    //call function gameStart
    gameStart(ctx);

    
    

}
