let count=0

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");


increaseBtn.onclick=function(){
    count++;
    document.getElementById("counterLabel").textContent=count;
}
decreaseBtn.onclick=function(){
    count--;
    document.getElementById("counterLabel").textContent=count;
}
resetBtn.onclick=function(){
    count=0
    document.getElementById("counterLabel").textContent=count;

}

