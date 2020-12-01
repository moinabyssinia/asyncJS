/* demonstrate the use of setTimeout in nesting */
setTimeout(function(){
    document.body.style.backgroundColor = "green";
    setTimeout(function(){
        document.body.style.backgroundColor = "blue";
        setTimeout(function(){
            document.body.style.backgroundColor = "olive";
        }, 2000);
    }, 2000);
})