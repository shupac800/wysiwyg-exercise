var q = document.querySelector(".selected p[class='bio']");
var t = document.getElementById("textInput");

console.log(q);
document.onload = (function (){t.value = q.innerHTML})();

t.addEventListener("input",function() {
  q.innerHTML = t.value;
});