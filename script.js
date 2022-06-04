// Header Style App

// $(document).ready(function() {
//     $("header li").on('click', function() {
//         console.log($(this).text()) // we can not type span or li cuz it's will read all spans or all li's
//     })
// })


// $(document).ready(function() {
//     $("header li ").click(function() {
//         $(this).addClass("active").siblings().removeClass("active")
//     })
// }) // in case li not a


$(document).ready(function() {
    // Header Style App
    $("header li a ").click(function() {
            $(this).addClass("active") // clicked a 
                .parent() //li
                .siblings() //li li li
                .find("a") // a a a
                .removeClass("active")
        })
        // Window App
    var homeOffSet = $(".home").offset().top
    console.log(homeOffSet)
        // $(window).scroll(function() {
        //     var windowScroll = $(this).scrollTop()
        //     if (windowScroll >= homeOffSet) {
        //         $(".home").css("background", "red")
        //     } else {
        //         $(".home").css("background", "coral")
        //     }
        // })
    $(window).scroll(function() {
            var windowScroll = $(this).scrollTop()
            if (windowScroll > 200) {
                $("header").addClass("changeHeader")

            } else {
                $("header").removeClass("changeHeader")
            }
        })
        // Dynamic Tabs
        // $("header a ").click(function() {
        //     let myID = $(this).attr("id"); // home about contact portfolio
        //     $("section").hide()
        //     $("." + myID).show()
        // })
        // End 

    // Filter Images //mixitup jquert plugin
    $(".tabs button").click(function() {
        var myClass = $(this).attr("class")
        console.log(myClass)
        if (myClass == 'all') $(".images img").fadeIn()
        else {
            $(".images img").hide()
            $(".images ." + myClass).fadeIn()
        }

    })

    // Smooth Scroll Header APP
    var headerHeight = $("header").height()
    $("header a").click(function() {
        var id = $(this).attr("id")
        console.log(id)
        $("body,html").animate({
            scrollTop: $("." + id).offset().top - headerHeight
        })
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".scrollTop").show()
        } else {
            $(".scrollTop").hide()
        }
    })
    $(".scrollTop").click(function() {
            $("body,html").animate({
                scrollTop: 0
            }, 2000)
        })
        // Calculate | countDown char of textarea app
    $("textarea").keyup(function(e) {
        console.log(e.target.value.length)
        if (e.target.value.length >= 100) {
            e.target.value = e.target.value.substr(0, 100)
        }
    })
})