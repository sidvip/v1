var mustClear;

function imageRotate90deg() {
    document.getElementById('myImage').style.transform = 'rotateY(90deg) scale(0.72)';
    document.getElementById('myImage').style.transitionDuration = '4s';
}

function imageRotate180deg() {
    document.getElementById('myImage').style.transform = 'rotateY(180deg)  scale(0.72)';
    document.getElementById('myImage').style.transitionDuration = '4s';
}

function imageRotateNull() {
    document.getElementById('myImage').style.transform = '';
    document.getElementById('myImage').style.transitionDuration = '';
}

function ImageHoverCallback(e) {
    imageRotateNull();
    if (e.type == 'mouseenter' ) {
        if (mustClear != undefined) {
            clearTimeout(mustClear);
        }
        imageRotate90deg();
        mustClear = setTimeout(()=>{document.getElementById('myImage').src = '../all_images/flipImage.png'}, 1200);
        imageRotate180deg();
    } else {
        clearTimeout(mustClear);
        document.getElementById('myImage').src = '../all_images/sid.jpg';
    }
}

function mainImageMouseInAnimation () {
    document.getElementsByClassName('image-bg')[0].addEventListener("mouseenter", ImageHoverCallback);
}

function mainImageMouseOutAnimation () {
    document.getElementsByClassName('image-bg')[0].addEventListener("mouseleave", ImageHoverCallback);
    if (mustClear != undefined) {
        clearTimeout(mustClear);
    }
}

mainImageMouseInAnimation();
mainImageMouseOutAnimation();
