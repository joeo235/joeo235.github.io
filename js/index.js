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