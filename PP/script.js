document.getElementById('contactForm').addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        if (name.trim() === '') {
            alert('Por favor, ingrese su nombre.');
            event.preventDefault();
        }

        if (email.trim() === '' || !email.includes('@')) {
            alert('Por favor, ingrese una dirección de correo electrónico válida.');
            event.preventDefault();
        }

        if (message.trim() === '') {
            alert('Por favor, ingrese un mensaje.');
            event.preventDefault();
        }
    });
    
        console.log("Formulario enviado.");
        alert("Formulario enviado. Gracias por contactarnos.");
        this.reset();
 


   

document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".accordion-header");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var content = this.nextElementSibling;
            
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones con la clase "info-btn"
    var infoButtons = document.querySelectorAll('.info-btn');

    // Recorre todos los botones y agrega un evento de clic a cada uno
    infoButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Aquí puedes definir lo que sucederá cuando se haga clic en el botón
            var cardTitle = button.previousElementSibling.previousElementSibling.textContent;
            alert('Más información sobre: ' + cardTitle);
        });
    });
});


