var q;
var peeps = [
{
  title: "Spy",
  name: "Klaus Fuchs",
  bio: "As a mole at Los Alamos, Fuchs slipped the Soviets the atomic bomb secrets of the Manhattan Project.",
  image: "http://spymuseum.com/wp-content/uploads/2012/12/portfolio-fuchs-klaus001.jpg",
  lifespan: { birth: 1911, death: 1988 }
},
{
  title: "Punk Rocker",
  name: "Joey Ramone",
  bio: "Front man of The Ramones, counterculture icon Joey Ramone took punk rock into the mainstream.",
  image: "http://vignette3.wikia.nocookie.net/peel/images/5/51/09-joey-ramone.jpg/revision/latest",
  lifespan: { birth: 1951, death: 2001 }
},
{
  title: "Chanteuse",
  name: "Edith Piaf",
  bio: "Piaf was a French cabaret singer, songwriter and actress who became widely regarded as France's national chanteuse, as well as being one of France's greatest international stars.",
  image: "http://www.singers.com/people/images/EdithPiaf.jpg",
  lifespan: { birth: 1915, death: 1963 }
}];

var container = document.getElementById("container");

// MAIN: EXECUTE ON PAGE LOAD
peeps.forEach(function (p) {
  container.innerHTML += `<div class="person">
                            <header>
                              ${p.name}, ${p.title}
                            </header>
                            <section>
                              <img src='${p.image}'>
                              <p class="bio">${p.bio}</p>
                            </section>
                            <footer>
                              ${p.lifespan.birth}-${p.lifespan.death}
                            </footer>
                          </div>`;
});

var personRef = document.getElementsByClassName("person"); // person class must exist
personRef[0].classList.add("selected"); // initialize first person as selected
var selectedPerson = document.getElementsByClassName("selected"); // should only be one

// add event listener to each "person" element
for (i = 0; i < personRef.length; i++) {
  personRef[i].addEventListener("click",caughtClick);
};

// add event listener to text input
textInput.addEventListener("keyup",caughtLetter); // is "input" what you want??


/////////////////////////////

function caughtClick(e) {
  selectedPerson[0].classList.remove("border"); // remove "border" from old selectedPerson
  selectedPerson[0].classList.remove("selected"); // remove "selected" from old selectedPerson, note that after you do this, selectedPerson ref will be empty
  e.target.parentNode.classList.add("selected");
  e.target.parentNode.classList.add("border");
  q = document.querySelector(".selected p[class='bio']");
  textInput.value = q.innerHTML;
  textInput.focus();
}

function caughtLetter(e) {
  var t = e.target.value
  t = t.substr(t.length-1); // ASCIIvalue of last character in string
  if (t.charCodeAt(0) == 10) {
    textInput.value = "";
  }
  q.innerHTML = e.target.value;
}
