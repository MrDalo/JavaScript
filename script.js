
var snake = {x: 10, y: 11};

function movement(){

    snake.x+=5;
    snake.y+=5;

    document.getElementById('head').style.left = snake.x+'px';
    document.getElementById('head').style.top = snake.y+'px';


    console.log(snake);
    
}


function backGround(){
    document.getElementById('main').style.backgroundColor='green';
    document.getElementById('main').style.backgroundImage='';
    document.getElementById('mainScreen').style.backgroundColor='green';
    document.getElementById('mainScreen').style.backgroundImage='';
    console.log("SOM TUUU");

}

function gameStart(controlNumber){
    
   

    
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
    snake.style.display = 'inline-block';
    snake.style.width = "10px";
    snake.style.height = "10px";


    //chagne background
    backGround();

    //call function gameStart
    gameStart(0);


    
    //document.getElementsByClassName("menu").style.display = "none";
    console.log("HERE");

}
