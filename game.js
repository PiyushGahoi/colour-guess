var numSquares=6;
var colors=randomColorFinder(numSquares);
var squares=document.querySelectorAll(".square");
var pickedcolor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var mode=document.querySelectorAll(".mode")
colorDisplay.textContent=pickedcolor;

for(var i=0;i<mode.length;i++)
{
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="Easy" ? numSquares=3 : numSquares=6;
        reset();
    });   
}

function reset(){
    colors=randomColorFinder(numSquares);
    pickedcolor=pickColor();
    h1.style.backgroundColor="steelBlue";
    for(var i=0;i<squares.length;i++){
        if(colors[i])
        {
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
        }
        else
        squares[i].style.display="none";
    }
    colorDisplay.textContent=pickedcolor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
}

resetButton.addEventListener("click",reset);

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedcolor){
            for(var i=0;i<squares.length;i++){
                squares[i].style.backgroundColor=pickedcolor;
            }
        messageDisplay.textContent="Correct";
        h1.style.backgroundColor=pickedcolor;
        resetButton.textContent="Play Again?";
        }
        else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Wrong";
        }
    })
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColorFinder(num)
{
    var arr =[]
    for(var i=0;i<num;i++)
    {
        arr[i]=randomrgb();
    }
    return arr;
}

function randomrgb()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}