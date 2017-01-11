//Initialize animation library
AOS.init({
  delay: 200,
});
//Clear form fields on focus
var clear = true;
function clear(obj) {
  if (clear) {
    obj.value = '';
    clear = false;
  }
}
//Transition effects for navigation (active/inactive states)
$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});