/* demonstrate the use of setTimeout in nesting */
const colorArray = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

/* setTimeout(function(){
    document.body.style.backgroundColor = "green";
    setTimeout(function(){
        document.body.style.backgroundColor = "blue";
        setTimeout(function(){
            document.body.style.backgroundColor = "olive";
        }, 2000);
    }, 2000);
}) */

/* my version of executing */
/* const delayedColorChange = (newColor, delay) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
    }, delay);
}

// delayedColorChange("red", 3000);
let delay = 2000;
for(let ii = 0; ii < colorArray.length; ii++){
    delayedColorChange(colorArray[ii], delay);
    delay = delay + 2000;
} */


/* colt's way */
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext();
    }, delay);
}

let ii = 0;
delayedColorChange(colorArray[ii], delay, () => {
    ii++;
    if(ii == colorArray.length){
        return;
    } else{
        delayedColorChange(colorArray[ii], delay, doNext)
    }
});

