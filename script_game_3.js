
var curLevel = 0;
const level = 4;
var failTimes = 0;
var curBall = level;
function start(callback){
    document.getElementById("start-scr").addEventListener('click',callback);
}
function showPlayScr(){
    document.getElementById("play-scr").style.display = 'block';
    document.getElementById("start-scr").style.display = 'none';
}



function createRandomNumber(){
    let rand = Math.floor(Math.random() * 90 + 10); 
    if( rand % 10 == 0){
        rand ++;
    }
    document.getElementById("number").innerHTML = rand;
}
function check(callback1){
    document.getElementById("check-btn").addEventListener('click',callback1);
}
function moveBall(scoreBallNum){
    document.getElementById("scoreBallNum").style.marginLeft +=400;
}

function compare(){

    let blank1 = document.getElementById("blank-1").value;
    let blank2 = document.getElementById("blank-2").value;
    let num = document.getElementById("number").innerHTML;
    
    let curLanguage = document.getElementById("language").innerHTML ;
    if(blank1 == "" || blank2 ==""){
        if( curLanguage == "English"){
            document.getElementById("inform").innerHTML = "Fill all <br> the blanks";
        }else{
            document.getElementById("inform").innerHTML = "Hãy điền đủ <br> số";}
    }else if( blank1 % 10 != 0 || blank2  == 0 || blank1 <= 9 ){
        if(curLanguage == "English"){
            document.getElementById("inform").innerHTML = "Invalid <br> number";
        }else{
            document.getElementById("inform").innerHTML = "Số không hợp <br> lệ";}
    }else{
        if(curLanguage == "English"){
            document.getElementById("inform").innerHTML = "Fill the <br> blanks";
        }else{
            document.getElementById("inform").innerHTML = "Hãy điền số <br>vào chỗ trống";}

        blank1 = Number(blank1);
        blank2 = Number(blank2);
        num = Number(num);
        if ( num == blank1 + blank2){
            addPoint();
            curLevel ++;
            curBall--;
            resetStage();
            
        if(curLevel == level ){
            endGame();
        }
        }else {
            if(curLanguage == "English"){
                document.getElementById("inform").innerHTML = "Unfortunately, <br> you wrong";
            }else{
                document.getElementById("inform").innerHTML = "Tiếc quá <br> Sai mất rồi";}

            failTimes ++;
            minusPoint();   
        } 
    }    
}

function resetStage(){
    createRandomNumber();   
    document.getElementById('blank-1').value = '';
    document.getElementById('blank-2').value = '';  
             
}

function addPoint(){
    document.getElementById("score-ball-"+ curBall).style.marginRight= "-280px";
    document.getElementById("score-ball-"+ curBall).style.marginLeft= "280px";
}

function minusPoint(){
    if(curBall != 4){
        let tempBall = curBall ++; 
        document.getElementById("score-ball-"+ curBall).style.marginRight= "0px";
        document.getElementById("score-ball-"+ curBall).style.marginLeft= "0px";  
    }
    if(curLevel >= 1 && curLevel <= (level-1) ){
        curLevel--;
    }

}



function language(callback){
    document.getElementById("language").addEventListener('click',callback);
}

function changeLanguage(){
    let curLanguage = document.getElementById("language").innerHTML;
    if( curLanguage == "Tiếng Việt"){
        document.getElementById("language").innerHTML = "English";
        document.getElementById("back-btn-1").innerHTML = "Return";
        document.getElementById("h1").innerHTML = "Write one 1-digit and one 2-digits number"; 
        document.getElementById("inform").innerHTML ="Fill the<br> blank";
    }else{
        document.getElementById("language").innerHTML = "Tiếng Việt";
        document.getElementById("back-btn-1").innerHTML = "Quay lại";
        document.getElementById("h1").innerHTML = "Hãy viết 1 số tròn chục và 1 số có 1 chữ số"; 
        document.getElementById("inform").innerHTML = "Hãy điền số <br>vào chỗ trống";
    }
}

function endGame(){
    document.getElementById("play-scr").style.display ='none';
    document.getElementById("ending-scr").style.display = 'block';
    let curLanguage = document.getElementById("language").innerHTML ;
    if(curLanguage == "Tiếng Việt"){
        document.getElementById("ending-text").innerHTML = "Bạn đã qua màn với "+ failTimes +" lần sai";     
    }else{
        document.getElementById("ending-text").innerHTML = "You have passed with "+ failTimes +" fail times";
        document.getElementById("back-btn-2").innerHTML = "Return";
    }
}
   
function gameStart(){
    start(showPlayScr);
    createRandomNumber();
    check(compare);
    language(changeLanguage);
}
    
    gameStart();