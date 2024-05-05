
let galleryLi = document.getElementById("gallery-two");

galleryLi.onclick = function() {
    let section = document.getElementById(gallery);
    section.scrollIntoView({behavior: "smooth"});
}
let myElement = document.getElementById("other links");
let myElement1 = document.getElementById("links");
myElement.onclick = function() {
    myElement1.style.display = "block"
};
let Articles = document.getElementById("Articles");
console.log(gallery);
Articles.addEventListener("click",  function(){
    window.location.hash = "#/Articles"
})

let gallery = document.getElementById("gallery");
console.log(gallery)
function scrollToSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.scrollIntoView({behavior: "smooth"});
}