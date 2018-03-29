var bool = true;

function moveToSelected(element) {
  
 if(bool == true){

bool = false;
  setTimeout(
    function() {
      bool = true;
    }, 1000);

  var test =document.getElementById("carousel");

  
  
  if (element == "next") {

      console.log('ici c\'est next');

      var selected = $(".selected").next(); 



    } else if (element == "prev") {

      console.log('ici c\'est prev');
      

      var selected = $(".selected").prev();

      
    } else {

      console.log('ici c\'est element');      

      var selected = element;



    }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
    var hideLeft = $(prevSecond).prev();
    var hideRight = $(nextSecond).next();
    var hideLeftSecond = $(hideLeft).prev();
    var hideRightSecond = $(hideRight).next();

    if(element == "prev"){

      console.log('1er if');

      $(selected).removeClass().addClass("selected");
  
      $(prev).removeClass().addClass("prev");
      $(next).removeClass().addClass("next");
    
      $(nextSecond).removeClass().addClass("nextRightSecond");
      $(prevSecond).removeClass().addClass("prevLeftSecond");

      $(hideRight).removeClass().addClass("hideRight");
      $(hideLeft).removeClass().addClass("hideLeft");

      test.insertBefore(document.getElementById("carousel").lastChild,test.childNodes[0]);
      $(prevSecond).prevAll().removeClass().addClass("hideLeft");
    }
    else if(element == "next"){

      console.log('le else if');
      

      $(selected).removeClass().addClass("selected");
  
      $(prev).removeClass().addClass("prev");
      $(next).removeClass().addClass("next");
    
      $(nextSecond).removeClass().addClass("nextRightSecond");
      $(prevSecond).removeClass().addClass("prevLeftSecond");

      $(hideRight).removeClass().addClass("hideRight");
      $(hideLeft).removeClass().addClass("hideLeft");

      test.insertBefore(document.getElementById('carousel').firstChild,test.nextSibling);
      $(nextSecond.nextAll().removeClass().addClass("hideRight"));
    }
    else{
      $(selected).removeClass().addClass("selected");
  
      $(prev).removeClass().addClass("prev");
      $(next).removeClass().addClass("next");
    
      $(nextSecond).removeClass().addClass("nextRightSecond");
      $(prevSecond).removeClass().addClass("prevLeftSecond");

      $(hideRight).removeClass().addClass("hideRight");
      $(hideLeft).removeClass().addClass("hideLeft");
    }    
    
    }
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          moveToSelected('prev');
          break;
  
          case 39: // right
          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  /*$('#carousel div').click(function() {
    moveToSelected($(this));
  });*/
  
  $('.prev').click(function() {
    moveToSelected('prev');
  });
  
  $('.next').click(function() {
    moveToSelected('next');
  });