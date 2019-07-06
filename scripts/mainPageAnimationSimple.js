
function transitionRunningCheck() {
    let e1 = document.querySelector('#myImage');
    e1.addEventListener('transitionrun', (e)=> {
        document.getElementById('myImage').src = '../all_images/flipImage.png';
    });
}

function transitionCompletionCheck() {
    let e1 = document.querySelector('#myImage');
    e1.addEventListener('transitionend', (e)=> {
        document.getElementById('myImage').src = '../all_images/sid.jpg';
    });
}

function transitionCancelCheck() {
    let e1 = document.querySelector('#myImage');
    e1.addEventListener('transitioncancel', (e)=> {
        document.getElementById('myImage').src = '../all_images/sid.jpg';
    });
}

function navButtonClick1() {
    function addDiv1() {
        let newDivValue = document.getElementsByClassName('onButton1')[0].innerText;
        document.getElementsByClassName('extreme-right')[0].innerHTML = newDivValue;
    }
    
    let buttonId = document.querySelector('.button1').addEventListener('click', addDiv1);
}

function navButtonClick2() {
    function addDiv2() {
        let newDivValue = document.getElementsByClassName('onButton2')[0].innerText;
        document.getElementsByClassName('extreme-right')[0].innerHTML = newDivValue;
    }
   
    let buttonId = document.querySelector('.button2').addEventListener('click', addDiv2);
}

// navButtonClick1();
// navButtonClick2();
// transitionRunningCheck();
// transitionCancelCheck();
// transitionCompletionCheck();