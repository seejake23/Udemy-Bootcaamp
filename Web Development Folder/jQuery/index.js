$("h1").addClass("big-title");

$("button").text("Don't Click Me!");

$("button").html("<em>Dont Click Me</em>")


// change an attribute like an href
$("a").attr("href", "https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAEXSFzIOE8PQ64RnNKjwa07JbOLoCQayIwG_HWk4C23BsV675qRS3-nnDY5L5wbn7lVfVHGK750c4obB6Lv3R3B2B-E9OjDAjN8gP_DeZ___-kBIqmiiCiTILb0Yefd2j3qZ2gwXzZC2YzAmJzvBRx6lXb1q2uQBeJjcMgHOsL4e");

// adding event listeners
// $("h1").click(function() {
//     $("h1").css("color", "violet")
// });


//turn this into...
// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//this... with jquery
$("button").click(function(){
    $("h1").css("color", "purple");
});


$("input").keydown(function (e) { 
    $("h1").text(e.key);
});


// .on is an all encompassing function instead of specifying click or keydown etc
$("h1").on("mouseover", function(){
    $("h1").css("color", "cyan");
    $("h1").animate({opacity: 0.2}).animate({opacity: 0.5});
});


