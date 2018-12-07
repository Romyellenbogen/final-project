$(document).ready(() =>{

$('.body').hide();


  $('.subculture-image').on('click', event => {
    $(event.currentTarget).next().slideToggle('.body');
  })

  function hideAll() {
    $('#2010').hide();
    $('#2000').hide();
    $('#1990').hide();
    $('#1980').hide();
    $('#1970').hide();
    $('#1960').hide();
  }

  hideAll();

  $('.chart-img').on('click', event => {
    $(event.currentTarget).next().slideToggle('.chart-list');
  })

  $('.top-ten-song').hide();

  $('.top-ten').on('click', event => {
    $(event.currentTarget).next().slideToggle('.top-ten-song');
  })

  $('.top-ten').on('click', function () {
    $.each($('audio'), function(){
        this.pause();
        this.currentTime = 0;
    });
  });

$('.trivia-song').hide();

$('.trivia').on('click', event => {
  $(event.currentTarget).next().toggle('.trivia-song');
})

$('.trivia').click(function() {
  $('audio').each(function() {
    this.pause();
    this.currentTime = 0;
  });
})

$('.trivia-yes').click(function () {
  $(this).css({'background-color': '#469355', 'color': '#fff'})
});

$('.trivia-no').click(function () {
  $(this).css({'background-color': '#b21c2e', 'color': '#fff'})
});


$('.rec').hide();

$('.rec-button').on('click', event => {
  $(event.currentTarget).next().toggle('.rec');
})

$('#f1').click(function () {
    $(this).replaceWith($('#f2'));
})

$('#f2').click(function () {
    $(this).replaceWith($('#f3'));
})

$('#r1').click(function () {
    $(this).replaceWith($('#r2'));
})

$('#r2').click(function () {
    $(this).replaceWith($('#r3'));
})

$('#i1').click(function () {
    $(this).replaceWith($('#i2'));
})

$('#i2').click(function () {
    $(this).replaceWith($('#i3'));
})

$('#p1').click(function () {
    $(this).replaceWith($('#p2'));
})

$('#p2').click(function () {
    $(this).replaceWith($('#p3'));
})

$('#d1').click(function () {
    $(this).replaceWith($('#d2'));
})

$('#d2').click(function () {
    $(this).replaceWith($('#d3'));
})

$('#s1').click(function () {
    $(this).replaceWith($('#s2'));
})
$('#s2').click(function () {
    $(this).replaceWith($('#s3'));
})

$('#bib-text').hide();

$('.bib').on('click', event => {
  $(event.currentTarget).next().toggle('#bib-text');
})

})
