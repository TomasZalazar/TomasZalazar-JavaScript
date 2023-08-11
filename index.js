// Cotizador de seguros




document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cotizador-form");
    const calcularButton = document.getElementById("calcular");

    calcularButton.addEventListener("click", function () {
        const edadInput = document.getElementById("edad");
        const tipoSelect = document.getElementById("tipo");

        // Validar si los campos están vacíos
        if (edadInput.value === "" || tipoSelect.value === "") {
            alert("No ingresaste todos los datos. Por favor, completa el formulario.");
            return;
        }

        const edad = parseInt(edadInput.value);
        const tipo = tipoSelect.value;

        const prima = calcularPrima(edad, tipo);

        mostrarResultado(prima);
    });

    function calcularPrima(edad, tipo) {
        if (edad >= 1 && edad <= 100) {
            const totalPrima = 100*edad*tipo
            return totalPrima
        }else if(edad > 100){
            alert('Ingresa una edad de 1 a 100')
        }
    return 0
    }
    


    function mostrarResultado(prima) {
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.textContent = `La prima de seguro es: $${prima}`;
    }
});

