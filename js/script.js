/* Scroll nav section */
$(document).ready(function(){
  $(".navbar a, .footer-links a, footer a[href='#myPage']").on('click', function(event) {

  if (this.hash !== "") {
    event.preventDefault();

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      
      window.location.hash = hash;
    });
  } // End if
});



  /* General slide animation up */
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });


  /* Service slide left */
    $(".brand-nav").ready(function() {
      $(".slideanimleft").each(function(){
          $(this).addClass("slideleft");
      });
    });

	/* Scroll to Top */ 
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 70) {        
	        $('.to-top').fadeIn(200);    
	    } else {
	        $('.to-top').fadeOut(200);   
	    }
	});

	$('.to-top').click(function() {      
	    $('.body,html').animate({
	        scrollTop : 0                       
	    }, 500);
	});


})