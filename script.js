$(document).on("click", ".empty.post-it i", function() {
  
  $(".empty.post-it").html('<i class="fas fa-times delete-button"></i><textarea class="post-it-input" name="name" rows="9" cols="17"></textarea>');
  $(".empty.post-it").addClass("color");
  $(".empty.post-it").removeClass("empty");
  $("main").append('<section><div class="empty post-it"><i class="fas fa-plus-square"></i></div></section>');
  if($(".yellow").html() == $(".selected").html()) {
    $(".color.post-it").css({"background-color": "#FFE400"});
    $(".color.post-it textarea").css({"background-color": "#FFE400"});
  }
  if($(".red").html() == $(".selected").html()) {
    $(".color.post-it").css({"background-color": "#FF652F"});
    $(".color.post-it textarea").css({"background-color": "#FF652F"});
  }
  if($(".green").html() == $(".selected").html()) {
    $(".color.post-it").css({"background-color": "#14A27C"});
    $(".color.post-it textarea").css({"background-color": "#14A27C"});
  }
  $(".color.post-it").removeClass("color");
})

$(".yellow").click(function() {
  $(".selected").html("")
  $(".selected").removeClass("selected");
  $(".yellow").addClass("selected");
  $(".yellow").html('<i class="far fa-check-circle"></i>');
})

$(".red").click(function() {
  $(".selected").html("")
  $(".selected").removeClass("selected");
  $(".red").addClass("selected");
  $(".red").html('<i class="far fa-check-circle"></i>');
})

$(".green").click(function() {
  $(".selected").html("")
  $(".selected").removeClass("selected");
  $(".green").addClass("selected");
  $(".green").html('<i class="far fa-check-circle"></i>');
})

$(document).on("click", ".delete-button", function() {
  $("section:hover").remove();
})

$(".delete-all-button").click(function() {
  $("main").html('<section><div class="empty post-it"><i class="fas fa-plus-square"></i></div></section>');
})
