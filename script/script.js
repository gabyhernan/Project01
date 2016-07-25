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

var audio =$('#soundclip')[0];
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
  score = 0; // restarts score and pauses sound
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



// $('.target').click(function() {
//   score++;
//   $('.score h2').text("Score: " + score);
//   $(this).attr('src','images/blah.png');
// })


  function moveTarget (person, time) { //
    setInterval(function() { //  two lines are from duck hw
        if (person.css('display')==='none'){

       person.children().css('content','url(images/'+person.children().attr('id')+'.png)');
      person.css("top", Math.random() * window.innerHeight);
      person.css("left", Math.random() * window.innerWidth);


    }
      else{
    }
      person.fadeToggle("slow","linear");
    }, time)
}

});

//   function moveTarget () {
//     setInterval(function() {
//         var targets = $('.target') // from duck hw
//         targets.forEach(function(target){
//           if (target.css('display')==='none'){
//           target.css("top", Math.random() * window.innerHeight);
//           target.css("left", Math.random() * window.innerWidth);
//         }
//         else{
//           // do nothing
//         }
//         target.fadeToggle("slow","linear");s
//         })

//     }, 100)
// }




//     var targetRandom = Math.floor(Math.random() * target.length); // randomly chooses an image
//     // $('.hide').hide();

//     var $img = $('<img>');
//     $img.attr('src', target[targetRandom])
//         .fadeIn(1000);
//         $('.game').append($img);
//   })

//       $('.game').on('click', 'img', function() {
//        $(this).remove(); // removes target when clicked
//                           // have to add image target effect here
//   })                    // have "shh" sound go off here

// })

// createTarget;






// var createTarget = $(function() {
//   $('.hide').on('click', function() { // from food basket hw
//     var targetRandom = Math.floor(Math.random() * target.length); // randomly chooses an image
//     // $('.hide').hide();

//     var $img = $('<img>');
//     $img.attr('src', target[targetRandom])
//         .fadeIn(1000);
//         $('.game').append($img);
//   })

//       $('.game').on('click', 'img', function() {
//        $(this).remove(); // removes target when clicked
//                           // have to add image target effect here
//   })                    // have "shh" sound go off here

// })

// createTarget;
