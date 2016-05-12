 $(document).ready(function() {
 	$("body").fadeIn(1000);

 $(".darken").on("mouseenter", function() {
$(this).removeClass("darken")
  });
$(".darken").on("mouseleave", function() {
$(this).addClass("darken")
  });
});