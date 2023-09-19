
var time = 60;
var score = 0;
var hitrn = 0;


function scoreIncreaser()
{
    score+=10;
    document.querySelector("#score").textContent= score;

}


function createBubble(){
    var elem = "";

for(var i=1;i<=132;i++)
{
    var num = Math.floor(Math.random()*10);
    elem += `<div class="circle">${num}</div>`
}

document.querySelector("#bottom").innerHTML = elem;
}

function setTime(){
   var change = setInterval(() => {

        if(time>0){
        time--;
        document.querySelector('#timer').textContent = time;
        }
        else{
            clearInterval(change);
            var number = document.querySelector("#score").textContent;
            document.querySelector("#bottom").innerHTML = `<h1> Game Over , Your score : ${number}</h1>`;
            // document.querySelector("#bottom").innerHTML = `<h1>Your score : ${number}</h1>`;
        }
    }, 1000);
}

function hits()
{

     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitit").textContent = hitrn;

}


document.querySelector("#bottom").addEventListener("click",(dets)=>{

   var clicked =  Number(dets.target.textContent);

   if(clicked === hitrn)
   {
        scoreIncreaser();
        hits();
        createBubble();
        
   }

})

hits();
createBubble();
 
setTime();







