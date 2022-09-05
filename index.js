var good = document.getElementById('good'),
    fast = document.getElementById('fast'),
    cheap = document.getElementById('cheap');

function changed1(){

    isGood = good.checked;
    isFast = fast.checked;
    isCheap = cheap.checked;

    if(isGood && isFast && isCheap ){
        cheap.checked = false;
    }
}
function changed2(){

    isGood = good.checked;
    isFast = fast.checked;
    isCheap = cheap.checked;

    if(isGood && isFast && isCheap ){
        good.checked = false;
    }
}
function changed3(){

    isGood = good.checked;
    isFast = fast.checked;
    isCheap = cheap.checked;

    if(isGood && isFast && isCheap ){
        fast.checked = false;
    }
}