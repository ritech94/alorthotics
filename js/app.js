function fadeIn(el) {
    el.classList.add('show');
    el.classList.remove('hide');
}
function fadeOut(el) {
    el.classList.add('hide');
    el.classList.remove('show');
}

var nav = document.getElementById('navController');
var toTopBtn = document.getElementById('backToTop');

// Control .navbar visibility by scrolling
(function($) {
    // Landing Page Height
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var landingHeight = 575;
    } else {
        var landingHeight = 500;
    }

    $(document).ready(function() {
        // Reset nav z-index to normal
        nav.classList.add('visible');
        toTopBtn.classList.add('visible');

        if ($(window).scrollTop() > landingHeight) {
            fadeIn(nav);
            fadeIn(toTopBtn);
        }

        $(window).scroll(function() {
            if ($(this).scrollTop() > landingHeight) {
                fadeIn(nav);
                fadeIn(toTopBtn);
            } else {
                fadeOut(nav);
                fadeOut(toTopBtn);
            }
        });
    });
})(jQuery);

// Smooth Scrolling
$('.navbar a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );
    var navHeight = 0;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        navHeight = 76;
    } else {
        navHeight = 91;
    }

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - navHeight
        }, 1000);
    }

});

// Close responsive menu when scroll trigger is clicked
$('.navbar a[href^="#"]').click(() => {
    $('.navbar-collapse').collapse('hide');
})

// Copyright Year
$(function() {
    var cYear = new Date().getFullYear();
    $('#year').html(cYear);
});

// EmailJS
function sendMail() {
    var cName = document.getElementById('contact-name');
    var cEmail = document.getElementById('contact-email');
    var cMessage = document.getElementById('contact-message');
    var cStatus = document.getElementById('contact-status');

    if (cName.value != '' && cEmail.value != '' && cMessage.value != '') {
        // Send data via EmailJS
        emailjs.send('gmail', 'ritech',
        {
            "to_email": "ri.tech94@gmail.com",
            "from_email": "no-reply@alorthotics.ca",
            "contact_email": cEmail.value,
            "contact_name": cName.value,
            "contact_phone": "No Data",
            "contact_msg": cMessage.value
        });

        // Clear Form Fields
        cName.value = '';
        cEmail.value = '';
        cMessage.value = '';

        // Display Sent Message
        cStatus.innerHTML = 'Message Sent!';
    } else {
        cStatus.innerHTML = 'Please fill the missing fields!';
    }
}