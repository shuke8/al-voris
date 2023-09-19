// -----------------Home-banner---------------
    jQuery("#banners").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1024: {
                items: 1
            },
            1366: {
                items: 1
            }
        }
    });
    
    
    
        jQuery(".ea-tips-related-main").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },

                600: {
                    items: 2
                },

                1024: {
                    items: 4
                },

                1366: {
                    items:4
                }
            }
        });
    
    
    
    jQuery(".ea-tips-left-bottom-slider").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 2
                },

                600: {
                    items: 2
                },

                1024: {
                    items: 2.3
                },

                1366: {
                    items:2.3
                }
            }
        });
            jQuery(".ea-tips-cluster-main").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },

                600: {
                    items: 2
                },

                1024: {
                    items: 4
                },

                1366: {
                    items:4
                }
            }
        });
        
        
// --------------------- Scroll Top - Button----------------------------
    $(window).scroll(function() {
        $(this).scrollTop() >= 50 ?
        $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
    }), $("#return-to-top").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 500)
    })    
// ---------------------------Home Popular Tour Section----------------------------------
      jQuery("#home-popular-tour").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1366: {
                    items:3
                }
            }
        });
// ---------------------- Blog  Scrolling-----------------------
      jQuery("#latest-blog-sldr").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1024: {
                    items: 3
                },
                1366: {
                    items:3
                }
            }
        });
// ---------------------- Our Prtner Scrolling-----------------------
      jQuery("#our-partners").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1024: {
                    items: 6
                },
                1366: {
                    items:6
                }
            }
        });
// ----------------------Testimonial scroller-------------------------
      jQuery("#home-testimonial").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1366: {
                    items:3
                }
            }
        });
// -----------------------our team-------------------------------
      jQuery("#our-team").owlCarousel({
            autoplay: true,
            lazyLoad: true,
            loop: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            margin:20,
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
                1366: {
                    items:3
                }
            }
        });
// ------------------Counter Section---------------------
    $('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
// ---------------------exapand all and colapse all------------------------
   jQuery(function($) {
    $('#collapsehideall2').click(function() {
    $('#accordion .panel-collapse').collapse('hide');
     return false;
     });
    $('#collapseshowall2').click(function() {
    $('#accordion .panel-collapse').collapse('show');
     return false;
    });
    });
  // --------------------------------------tabbing section------------------------------   
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
// --------------------------------------page-scroll-a------------------------------
    (function($) {
    'use strict';
    
    jQuery(document).on('ready', function(){
    
            $('a.page-scroll').on('click', function(e){
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top - 50
                }, 1500);
                e.preventDefault();
            });     
    });     
                
})(jQuery);
// -----------------------video popup---------------------
$(function(){$("#video").videoPopup({autoplay:1,controlsColor:'white',showVideoInformations:0,width:1000,customOptions:{rel:0,end:60}})})
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 87;  // How many characters are shown by default
    var ellipsestext = "";
    var moretext = "Read More";
    var lesstext = "Read Less";
    
    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
// ----------------------------Mega Menu---------------------
// $(document).ready(function() {
//                 //responsive menu toggle
//                 $("#menutoggle").click(function() {
//                     $('.xs-menu').toggleClass('displaynone');
//                     });
//                 //add active class on menu
//                 $('ul li').click(function(e) {
//                     // e.preventDefault();
//                     $('li').removeClass('active');
//                     $(this).addClass('active');
//                 });
//             //drop down menu    
//                     $(".drop-down").hover(function() {
//                         $('.mega-menu').addClass('display-on');
//                     });
//                     $(".drop-down").mouseleave(function() {
//                         $('.mega-menu').removeClass('display-on');
//                     });
            
//             });
// ---------------------Gallery popup--------------------
$(document).ready(function(){
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
preload: [0,1] // Will preload 0 - before current, and 1 after the current image
},
image: {
  tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  titleSrc: function(item) {
    return '<small>by Al-voris Travels</small>';
  }
}
});
});

// $(document).ready(function(){
// $(".paragraph").hide();
//   $(".title").click(function(){
//     $(".paragraph").toggle(1000);
//   });
// });
if ( $(window).width() < 768 ){
$(document).ready(function () {
    $(".paragraph").hide();
    $('.title').click(function () {
        // .parent() selects the A tag, .next() selects the P tag
        $(this).next().slideToggle(200);
    });
    $('.paragraph').slideUp(200);
});
}
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('bg-color animated fadeInDown');
    } else {
        $('header').removeClass('bg-color animated fadeInDown');
    }
});    
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 400) {
        $('.sider-booking-price-list').addClass('none');
    } else {
        $('.sider-booking-price-list').removeClass('none');
    }
});    

$(document).ready(function(){
// This button will increment the value
$('.qtyplus1').click(function(e){
// Stop acting like a button
e.preventDefault();
// Get the field name
fieldName = $(this).attr('field');
// Get its current value
var currentVal = parseInt($('input[name='+fieldName+']').val());
// If is not undefined
if (!isNaN(currentVal)) {
// Increment
$('input[name='+fieldName+']').val(currentVal + 1);
} else {
// Otherwise put a 0 there
$('input[name='+fieldName+']').val(0);
}
});
// This button will decrement the value till 0
$(".qtyminus1").click(function(e) {
// Stop acting like a button
e.preventDefault();
// Get the field name
fieldName = $(this).attr('field');
// Get its current value
var currentVal = parseInt($('input[name='+fieldName+']').val());
// If it isn't undefined or its greater than 0
if (!isNaN(currentVal) && currentVal > 0) {
// Decrement one
$('input[name='+fieldName+']').val(currentVal - 1);
} else {
// Otherwise put a 0 there
$('input[name='+fieldName+']').val(0);
}
});
});

$(document).ready(function(){
        // This button will increment the value
        $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
        // Increment
        $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
        // Otherwise put a 0 there
        $('input[name='+fieldName+']').val(0);
        }
        });
        // This button will decrement the value till 0
        $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
        // Otherwise put a 0 there
        $('input[name='+fieldName+']').val(0);
        }
        });
    });



// Telegram
document.getElementById("submit_enqry").addEventListener("click", function() {
    // Collect form data
    const name = document.getElementById("enqry_name").value;
    const email = document.getElementById("enqry_email").value;
    const phone = document.getElementById("enqry_phone").value;
    const city = document.getElementById("enqry_city").value;
    const travelDate = document.getElementById("enqry_tdate").value;
    const message = document.getElementById("enqry_mesge").value;

    // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with your actual bot token and chat ID
    const botToken = '6551100970:AAH2utJ-1qpLrQZGE5AWKhLiARtTnemrqZM';
    const chatId = '-736847323';

    // Create the message text
    const messageText = `
        Ism: ${name}
        Email: ${email}
        Tel: ${phone}
        Shaxar: ${city}
        Sayoxat kuni: ${travelDate}
        Xabar: ${message}
    `;

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`, {
        method: "GET"
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message to Telegram.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});


// second telegram send message
document.getElementById("submit_rqst").addEventListener("click", function() {
    // Collect form data
    const fullName = document.getElementById("rqst_fullname").value;
    const email = document.getElementById("rqst_email").value;
    const phone = document.getElementById("rqst_phone").value; // No need to add "+998" prefix here
    const callbackTime = document.getElementById("rqst_time").value;

    // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with your actual bot token and chat ID
    const botToken = '6551100970:AAH2utJ-1qpLrQZGE5AWKhLiARtTnemrqZM';
    const chatId = '-736847323';

    // Create the message text
    const messageText = `
        Ism: ${fullName}
        Email: ${email}
        Telefon: ${phone}
        Tel qilish: ${callbackTime}
    `;

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`, {
        method: "GET"
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message to Telegram.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});


// contact us
// Function to clear static text when the user clicks on the input field
function clearStaticText(input) {
    if (input.value === "+998 ") {
        input.value = "";
    }
}

// Attach event listener to the form submission button
document.getElementById("submit_me").addEventListener("click", function() {
    // Collect form data
    const fullName = document.getElementById("tm_fullname").value;
    const email = document.getElementById("tm_email").value;
    const phone = document.getElementById("tm_phone").value; // Add "+998" prefix
    const subject = document.getElementById("tm_subject").value;
    const arrival = document.getElementById("tm_arrival").value;
    const departure = document.getElementById("tm_dep").value;
    const numberOfAdults = document.getElementById("tm_adult").value;
    const numberOfChildren = document.getElementById("tm_noc").value;
    const message = document.getElementById("tm_message").value;

    // Replace 'YOUR_BOT_TOKEN' and 'YOUR_CHAT_ID' with your actual bot token and chat ID
    const botToken = '6551100970:AAH2utJ-1qpLrQZGE5AWKhLiARtTnemrqZM';
    const chatId = '-736847323';
    // Create the message text
    const messageText = `
        Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Arrival: ${arrival}
        Departure: ${departure}
        Number of Adults: ${numberOfAdults}
        Number of Children: ${numberOfChildren}
        Message: ${message}
    `;

    // Send the message to Telegram
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(messageText)}`, {
        method: "GET"
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message to Telegram.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
});
