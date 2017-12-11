function timer(){
  var countdown = 30 * 60 * 1000;
  var timerId = setInterval(function(){
    countdown -= 1000;
    var min = Math.floor(countdown / (60 * 1000));
    //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
    var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);  //correct

    if (countdown <= 0) {
       alert("30 min!");
       clearInterval(timerId);
       //doSomething();
    } else {
       $("#countTime").html(min + " : " + sec);
    }

  }, 1000); //1000ms. = 1sec.
}