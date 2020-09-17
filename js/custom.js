$(document).ready(function(){

  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    dots: false,
    draggable: true,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
        }
      }
    ]
  });








  // Set the Access Token
var accessToken = '12dd9b42737ee11cb8972472fddea252cb3749a5fe3a3edaf3ad223b4d90ccf3';

// Call Dribble v2 API
$.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
    dataType: 'json',
    type: 'GET',
    success: function(data) {  
      if (data.length > 0) { 
        $.each(data.reverse(), function(i, val) {                
          $('#shots').prepend(
            '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"style="max-width:400px; max-height:400px"/></a>'
            )
        })
      }
      else {
        $('#shots').append('<p>No shots yet!</p>');
      }
    }
});


// API Variables

//Image width 800x600 (Animated)
  // val.images.hidpi 
//Image width 400x300
  // val.images.normal
//Image width 200x150
  // val.images.teaser
//Title
  // val.title
//Description
  // val.description
//URL
  // val.html_url


  
});

