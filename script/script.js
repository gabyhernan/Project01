"use strict";
// (function(){

$(document).ready(function(){
  console.log('Now running')


var taylor = $('.taylor');
var donald = $('.donald');
var kanye = $('.kanye');
var target = $('.target');
var score = 0;
var moveKanye;
var moveTaylor;
var moveDonald;
var started = false;

var audio =$('#soundclip')[0];  //two lines are from stack overflow
  console.log(audio)
$('button.play').click(function()  {
  if(started === false) { // once clicked once it becomes true
                          // prevents errors with divs
      moveKanye =  moveTarget(kanye, 1000);
 moveTaylor = moveTarget(taylor, 1200);
moveDonald = moveTarget(donald, 800);
  audio.play();
  started = true;
  }
});



$('button.pause').click(function(){
  clearInterval(moveKanye);
  clearInterval(moveTaylor);
  clearInterval(moveDonald);
$('.score h2').text("Score: 0" );
  score = 0; // restarts  score , clears interval, pauses sound
  audio.pause();
});


$('.pick').click(function() {
  score++;
  $('.score h2').text("Score: " + score);
     // $(this).removeAttr("src").attr('src',getBlahImg());//+ '?timestamp='+Math.random()); // append a div to get blah image to work
     $(this).css('content','url('+getBlahImg()+')');
})

var blahs = ['images/blah.png',   // got help from stack overflow
            'images/hand.png'
];

var index = -1
function getBlahImg () {
  var blah;
  ++index;
  if (index >= blahs.length) {
    index = 0;
  }
  blah = blahs[index];
    return(blah);
}


  function moveTarget (person, time) { //
    setInterval(function() {
        if (person.css('display')==='none'){

       person.children().css('content','url(images/'+person.children().attr('id')+'.png)');
      person.css("top", Math.random() * window.innerHeight); // this two lines are from duck hw
      person.css("left", Math.random() * window.innerWidth);


    }
      else{
    }
      person.fadeToggle("slow","linear");
    }, time)
}

});
