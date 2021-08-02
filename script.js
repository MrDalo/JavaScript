
var snake = {x: 10, y: 11};

function movement(){

    snake.x+=5;
    snake.y+=5;

    document.getElementById('head').style.left = snake.x+'px';
    document.getElementById('head').style.top = snake.y+'px';

    console.log(snake);
    
}


function backGround(){
    document.getElementById('main').style.background='none';
    document.getElementById('mainScreen').style.background = 'none';
    document.getElementById('mainScreen').style.backgroundColor='88A701';
}


function gameStart(){
    



    window.setInterval(function(){movement();}, 100);
    
}


function play_function(){
    //deleting every elements in site
    var pageElements = document.getElementsByClassName('menu');
    for(i = 0; i < pageElements.length; i ++){
        pageElements[i].style.display = 'none';
        console.log(pageElements[i])
    }

    //adding snake in web page
    var snake = document.getElementById('head');
    //snake.style.display = 'inline-block';
    snake.style.width = "10px";
    snake.style.height = "10px";

    


    //change background
    backGround();

    //create playGround
    document.getElementById("Canvas").style.display = 'initial';
    var canvas= document.getElementById('Canvas');
    var ctx = canvas.getContext("2d");

    //call function gameStart
    gameStart();


    
    //document.getElementsByClassName("menu").style.display = "none";
    console.log("HERE");

}
