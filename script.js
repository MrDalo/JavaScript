
var snake = {x: 10, y: 11};
var xMove = 5;
var yMove = 0;

function movement(ctx){
    //clear old snake
    ctx.fillStyle="rgb(255,255,255)";
    ctx.fillRect(snake.x,snake.y,6,6);
    //create new snake
    ctx.fillStyle="rgb(200,0,0)";
    snake.x+=xMove;
    snake.y+=yMove;
    ctx.fillRect(snake.x,snake.y,6,6);
    


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
                console.log('ESC');
                return 100;          
        }

    });

    console.log(output);
    //end of setInterval - doesnt work
    //TODO
    if(output == 100){
        console.log("END");
        return 'end';
    }

    
}


function backGround(){
    document.getElementById('main').style.background='none';
    document.getElementById('mainScreen').style.background = 'none';
    document.getElementById('mainScreen').style.backgroundColor='88A701';
}


function gameStart(ctx){
   



    var interval = window.setInterval(function(){if(movement(ctx) == 'end'){clearInterval(interval);} }, 100);
    return;
}

function showTime(){
    
        var today = new Date();
        var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
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

    
    
    //document.getElementsByClassName("menu").style.display = "none";
    console.log("HERE");

}
