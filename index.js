const alleAfbeeldingen = document.querySelectorAll("img");
const jaar = document.getElementById("jaar");

alleAfbeeldingen.forEach(afbeelding => {
  afbeelding.addEventListener('mouseover', function(){
    jaar.innerText = afbeelding.getAttribute("data-jaar");
  })
})

