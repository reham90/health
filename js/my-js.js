$(document).ready(function() {


    // start js for navbar //

    $(".menu-button").click(function() {
        $(".menu-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-button").click(function() {
        $(".menu-screen").removeClass("active");
    });


    // end  js for navbar //


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    // start footer accordion  //
    if ($(window).width() < 991) {
        var acc = document.getElementsByClassName("footer-accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function myFunction(y) {
                this.classList.toggle("active");
                var footerDropdown = this.nextElementSibling;

                $(this).siblings(".footer-dropdown").slideToggle(200);



            });
        }
        $(".footer-accordion").click(function() {
            $(this).children('i').toggle();

        });
    }
    //end footer accordion //

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // start tabs js //

    // tabs

    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");


    tabLinks.forEach(function(el) {
        el.addEventListener("click", openTabs);
    });


    function openTabs(el) {
        var btnTarget = el.currentTarget;
        var country = btnTarget.dataset.country;

        tabContent.forEach(function(el) {
            el.classList.remove("active");
        });

        tabLinks.forEach(function(el) {
            el.classList.remove("active");
        });

        document.querySelector("#" + country).classList.add("active");

        btnTarget.classList.add("active");
    }


    // end tabs js //


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // start scroll to top button //

    var btn = $('.myBtn');

    $(window).scroll(function() {

    });


    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });


    // end scroll to top button //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // start slider carousel //
    $('.slider').owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<span class='lnr lnr-chevron-right right-arrow'></span>", "<span class='lnr lnr-chevron-left left-arrow'></span>"],
        responsive: {
            0: {

                items: 1
            },
            600: {

                items: 1
            },
            1200: {

                items: 1
            }

        }
    })


    // end slider carousel //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // start new carousel //
    if ($(window).width() < 991) {

        $('.new').owlCarousel({

            nav: true,
            rtl: document.dir == 'rtl' ? true : false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText: ["<span class='lnr lnr-chevron-right right-arrow'></span>", "<span class='lnr lnr-chevron-left left-arrow'></span>"],
            responsive: {
                0: {

                    margin: 15,
                    items: 1
                },
                600: {

                    margin: 30,
                    items: 2
                },
                1200: {

                    margin: 30,
                    items: 4
                }

            }
        });
    };

    // end new carousel //



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    /// wow js ///
    new WOW().init();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////