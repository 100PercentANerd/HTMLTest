// The basic check
if(document.readyState === 'complete') {
    // good to go!
}

// Polling for the sake of my intern tests
var interval = setInterval(function() {
    if(document.readyState === 'complete') {
        clearInterval(interval);
        done();
    }    
}, 100);





//document.getElementById("submit").addEventListener("click", this.submit_alrt, true);

//function submit_alrt(event){
//    alert("You pressed the button!");
//}