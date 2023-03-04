let accBlock = document.getElementsByClassName('accomplishments')[0];
let accItems = document.body.getElementsByClassName('acc-count');
let increment = () => {
    if(accItems[0].innerHTML < 1539){
        accItems[0].innerHTML = accItems[0].innerHTML * 1.0 + 100;
    }
    if(accItems[1].innerHTML < 3653){
        accItems[1].innerHTML = accItems[1].innerHTML * 1.0 + 100;
    }
    if(accItems[2].innerHTML < 5987){
        accItems[2].innerHTML = accItems[2].innerHTML * 1.0 + 100;
    }
    setTimeout(increment,100);
};
accBlock.addEventListener('mouseover', increment);
