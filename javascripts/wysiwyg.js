
var container = document.getElementById("container");

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

///////////////

peeps.forEach(function (p) {
  container.innerHTML += `<div class="person">
                            <header>${p.name}, ${p.title}</header>
                            <section>
                              <img src='${p.image}'>
                              <p id="bio">${p.bio}</p>
                            </section>
                            <footer>
                              <p>${p.lifespan.birth}-${p.lifespan.death}</p>
                            </footer>
                          </div>`;
});

var personRef = document.getElementsByClassName("person");

for (i = 0; i < personRef.length; i++) {
  personRef[i].addEventListener("click",caughtClick);
};

textInput.addEventListener("keypress",caughtLetter);

function caughtClick(e) {
  e.target.classList.toggle("border");
  textInput.focus();
}

function caughtLetter(e) {
  console.log(String.fromCharCode(e.keyCode));
  // how to bind bio in this section, and only this section,
  // to what's being typed in textInput?
}
