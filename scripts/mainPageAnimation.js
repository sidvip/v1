var allEventsThis = this;

allEventsThis.mainCall =  () => {
    var mainCallThis = this; 

    var ImageHoverCallback = function () {
        let flipTask = 'Image is flipped';
        console.log(flipTask);
    };

    mainCallThis.mainImageAnimation = () => {
        document.getElementById('myImage').addEventListener('mouseover', ImageHoverCallback);
        console.log('Hi ! Siddhartha');
    };
    mainCallThis.mainImageAnimation();
}
// console.log(rootThis);
let inFunctions = allEventsThis.mainCall();
// console.log(inFunctions);
// inFunctions.mainImageAnimation();
// let functionRootCall = mainThis.mainCall();
// console.log(this.mainImageAnimation());
// 