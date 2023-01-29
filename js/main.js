const tabs = document.querySelectorAll('.tarjeta ul li');
console.log(tabs);
const divs = document.querySelectorAll('.contenido > div');
console.log(divs);

tabs.forEach(function(tab) {
    //Agrega un click por cada li
    tab.addEventListener("click", function (e) {
        tabs.forEach(function(tab) {
            // Al hacer clic elimina la clase "box" del Li seleccionado
            tab.classList.remove("active");
        });
       // Agrega la clase activa en la li
       e.currentTarget.classList.add("active");
        
       divs.forEach(function(div) {
           // El Display None hace que no se vean los Divs
           div.style.display = 'none';
           //Selecciona el div que contiene la clase de contenido y hace Dysplay Flex
           document.querySelector('.' + e.currentTarget.dataset.content).style.display = 'block';
       });
   });
});


