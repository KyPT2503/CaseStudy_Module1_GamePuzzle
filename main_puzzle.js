/*Global Variable or Object*/

let figure,sticker=new Sticker();
let speed=500;
let score=0;
let isPlaying=true;
let topList={};
let musicGame=new Audio('https://audio-previews.elements.envatousercontent.com/files/301582762/preview.mp3');
let isMute=false;
let requestChangeSpeed=-1;
/**/
/**/
function newGame()
{
    /* draw main */
    let gameMainContent=``;
    for(let i=0;i<20;i++)
    {
        let content=`<tr class="boxRow">`
        for(let j=0;j<10;j++)
        {
            if(i==0)
            {
                content+=`<td style="border-top:1px solid greenyellow" class="box"></td>`;
            }
            else if(i==19)
            {
                content+=`<td style="border-bottom:1px solid greenyellow" class="box"></td>`;
            }
            else
            {
                content+=`<td class="box"></td>`;
            }
        }
        content+=`</tr>`
        gameMainContent+=content;
    }
    document.getElementById('main').innerHTML=gameMainContent;
    displayScore();
}
/**/
function creatNewFigure(kindOfStyle)
{
    if(kindOfStyle==0)
    {
        figure=new FigureStraightColumn();
    }
    if(kindOfStyle==1)
    {
        figure=new FigureSquare();
    }
    if(kindOfStyle==2)
    {
        figure=new FigureArrow();
    }
    if(kindOfStyle==3)
    {
        figure=new FigureL();
    }
    if(kindOfStyle==4)
    {
        figure=new FigureLReserve();
    }
    if(kindOfStyle==5)
    {
        figure=new FigureN();
    }
    if(kindOfStyle==6)
    {
        figure=new FigureNReserve();
    }
}
/*lay o tai toa do (x,y)*/
function getNode(x,y)
{
    if(isPlaying==false) return -1;
    let node= document.getElementById('main').getElementsByTagName('tr')[x].getElementsByTagName('td')[y];
    return node;
}
function displayFigure()
{
    checkToAppend();
    for(let i=0;i<figure.coordsList.length;i++)
    {
        if(figure.coordsList[i][0]>=0 && figure.coordsList[i][0]<20 && figure.coordsList[i][1]>=0 && figure.coordsList[i][1]<10)
        {
            let node=getNode(figure.coordsList[i][0],figure.coordsList[i][1]);
            node.innerHTML=`<img src="image/45934-green-yellow-square-button-icon.png" height="35" width="35"/>`;
        }
    }
}
function removeFigure()
{
    for(let i=0;i<figure.coordsList.length;i++)
    {
        if(figure.coordsList[i][0]>=0 && figure.coordsList[i][0]<20 && figure.coordsList[i][1]>=0 && figure.coordsList[i][1]<10)
        {
            let node=getNode(figure.coordsList[i][0],figure.coordsList[i][1]);
            node.innerHTML=``;
        }
    }
}
let idAutoMoveDown;
let idIncreaseSpeed;
function changeStyle(event)
{
    if(isPlaying==false) return;
    if(event.keyCode==38)
    {
        let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
        audio.play();
        removeFigure();
        figure.changeStyle();
        displayFigure();
    }
    if(event.keyCode==37)
    {
        let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
        audio.play();
        if(checkCanMoveLeft()==false) return;
        removeFigure();
        figure.moveLeft();
        displayFigure();
    }
    if(event.keyCode==39)
    {
        let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
        audio.play();
        if(checkCanMoveRight()==false) return;
        removeFigure();
        figure.moveRight();
        displayFigure();
    }
    if(event.keyCode==40)
    {
        removeFigure();
        figure.moveDown();
        displayFigure();
    }
    if(event.keyCode==32)
    {
        let audio_=new Audio('https://audio-previews.elements.envatousercontent.com/files/230927277/preview.mp3');
        audio_.play();
        removeFigure();
        while(checkToAppend()==false)
        {
            figure.moveDown();
        }
    }
}
function checkCanMoveLeft()
{
    for(let i=0;i<figure.coordsList.length;i++)
    {
        if(sticker.getIndex([figure.coordsList[i][0],figure.coordsList[i][1]-1]) != -1) return false;
    }
    return true;
}
function checkCanMoveRight()
{
    for(let i=0;i<figure.coordsList.length;i++)
    {
        if(sticker.getIndex([figure.coordsList[i][0],figure.coordsList[i][1]+1]) != -1) return false;
    }
    return true;
}

/*sticker*/
function displaySticker()
{
    for(let i=0;i<sticker.coordsList.length;i++)
    {
        let node=getNode(sticker.coordsList[i][0],sticker.coordsList[i][1]);
        node.innerHTML=`<img src="image/45934-green-yellow-square-button-icon.png" height="35" width="35"/>`;
    }
}
function removeSticker()
{
    for(let i=0;i<sticker.coordsList.length;i++)
    {
        let node=getNode(sticker.coordsList[i][0],sticker.coordsList[i][1]);
        node.innerHTML=``;
    }
}

/* Append figure to sticker*/
function checkToAppend()
{
    for(let i=0;i<figure.coordsList.length;i++)
    {
        if(figure.coordsList[i][0]==20)
        {
            figureMoveUp();
            appendFigureToSticker();
            return true;
        }
        if(sticker.getIndex([figure.coordsList[i][0],figure.coordsList[i][1]])!=-1)
        {
            figureMoveUp();
            appendFigureToSticker();
            return true;
        }
    }
    return false;
}
function figureMoveUp()
{
    for(let i=0;i<figure.coordsList.length;i++)
    {
        figure.coordsList[i][0]-=1;
    }
}
function checkEnd()
{
    for(let i=0;i<sticker.coordsList.length;i++)
    {
        if(sticker.coordsList[i][0]<=0) return true;
    }
    return false;
}
function appendFigureToSticker()
{
    sticker.append(figure.coordsList);
    if(checkEnd())
    {
        endGame();
        return;
    }
    removeSticker();
    sticker.checkRow();
    displaySticker();
    creatNewFigure(Math.floor(Math.random()*7));
}
function pauseGame()
{
    let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
    audio.play();
    isPlaying=!isPlaying;
    if(isPlaying)
    {
        document.getElementById('pause').innerHTML=`Pause`;
    }
    else
    {
        document.getElementById('pause').innerHTML=`Continue`;
    }
}
function displayScore()
{
    let node=document.getElementById('display-score');
    node.innerHTML=`<h1>Score</h1>  ${score}`;
}
function start()
{
    document.getElementById('description').style.display=`none`;
    clearInterval(idIncreaseSpeed);
    function autoMoveDown()
    {
        let speed_=speed;
        idAutoMoveDown=setInterval(function(){if(isPlaying==false) return;removeFigure();figure.moveDown();displayFigure()},speed_);
        idIncreaseSpeed=setInterval(function()
        {
            /*check request change speed*/
            if(requestChangeSpeed!=-1)// requestChangeSpeed != -1 : requesting change speed
            {
                speed_=requestChangeSpeed;
                requestChangeSpeed=-1; // reset request
            }

            clearInterval(idAutoMoveDown);
            if(speed_>200) speed_-=10;
            console.log(speed_);
            idAutoMoveDown=setInterval(function(){if(isPlaying==false) return;removeFigure();figure.moveDown();displayFigure()},speed_);
        },10000);
    }
    speed=500;

    /*for audio game*/
    let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
    audio.play();
    musicGame.loop=true;
    musicGame.play();

    /**/
    displayHighScore();
    score=0;
    clearInterval(idAutoMoveDown);
    isPlaying=true;
    newGame();
    creatNewFigure(Math.floor(Math.random()*7));
    autoMoveDown();
    sticker=new Sticker();
    document.addEventListener('keydown',changeStyle);
}
function endGame()
{
    clearInterval(idIncreaseSpeed);
    let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/98702224/preview.mp3');
    audio.play();
    isPlaying=false;
    let content=`<div class="game-over">GAME OVER<button class="button" onclick="start()">New Game</button>`;
    if(checkHighScore()==true) content+=`<br><p style="font-size:20px">You got a high score!</p><input type="text" id="input-name" onchange="saveHighScore()" placeholder="Type your name . . .">`;
    content+=`</div>`;
    document.getElementById('main').innerHTML=content;
}
function checkHighScore()
{
    for(let i=0;i<localStorage.length;i++)
    {
        if(score>+localStorage.getItem(localStorage.key(i)))
        {
            return true;
        }
    }
    return false;
}
function changeSpeed(value)
{
    let audio=new Audio('https://audio-previews.elements.envatousercontent.com/files/136199140/preview.mp3');
    audio.play();
    requestChangeSpeed=value; // will check in loop increase speed
}

/*latest*/
function saveHighScore()
{
    if(document.getElementById('input-name').value==``) return;
    let arr=[];
    for(let i=0;i<localStorage.length;i++)
    {
        arr.push([localStorage.key(i),+localStorage.getItem(localStorage.key(i))]);
    }
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i][1]<arr[j][1])
            {
                let tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
    arr[arr.length-1][0]=document.getElementById('input-name').value;
    arr[arr.length-1][1]=score;
    localStorage.clear();
    for(let i=0;i<arr.length;i++)
    {
        localStorage.setItem(arr[i][0],arr[i][1]);
    }
    document.getElementById('input-name').value=``;
    displayHighScore();
    document.getElementById('main').innerHTML=`<div class="game-over">GAME OVER<button class="button" onclick="start()">New Game</button>`;
}
function displayHighScore()
{
    let arr=[];
    for(let i=0;i<localStorage.length;i++)
    {
        arr.push([localStorage.key(i),+localStorage.getItem(localStorage.key(i))]);
    }
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i][1]<arr[j][1])
            {
                let tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
    let content=`<table id="table-top-score"<tr><td>Name</td><td>Score</td></tr> >`
    for(let i=0;i<localStorage.length;i++)
    {
        content+=`<tr><td>${arr[i][0]}</td><td>${arr[i][1]}</td></tr>`;
    }
    content+=`</table>`
    document.getElementById('display-top-scores').innerHTML=content;
}
function mute()
{
    if(isMute==false)
    {
        document.getElementById('mute').innerHTML=`Unmute`;
        isMute=true;
        musicGame.muted=true;
    }
    else
    {
        document.getElementById('mute').innerHTML=`Mute`;
        isMute=false;
        musicGame.muted=false;
    }
}

function displayDescription()
{
    document.getElementById('description').style.display=`flex`;
}

/*to reset local storage*/

localStorage.clear();
localStorage.setItem('Thư1','10');
localStorage.setItem('Thư2','0');
localStorage.setItem('Thư3','0');
localStorage.setItem('Thư4','0');
localStorage.setItem('Thư5','0');


