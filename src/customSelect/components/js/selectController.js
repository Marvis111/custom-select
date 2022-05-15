$(document).ready(function() {$('.select-io b').on('click', function(){ $('.select-io ul').slideToggle(); $('.select-io svg.arrow-head').toggleClass('rotate');}); $('.select-io ul li').on('click', function(){ $('.select-io ul li').removeClass('active');$(this).addClass('active'); $('.select-io b span').text($(this).text());$('.select-io ul').slideToggle();
    });
});