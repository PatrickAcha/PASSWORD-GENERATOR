document.addEventListener('DOMContentLoaded', (event) => {
    const cantidad = document.getElementById('cantidad'); 
    const botonGenerar = document.getElementById('generar');
    const botonLimpiar = document.getElementById('limpiar');
    const contrasena = document.getElementById('contrasena');
    const cadenaCaracteres = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz01234562789!@#$%^&*()';
    const mensajeFortaleza = document.getElementById('mensajeFortaleza');

    function generar() {
        const numeroDigitado = parseInt(cantidad.value);
        
        if (isNaN(numeroDigitado)) {
            alert("Por favor, ingresa un número válido.");
            return;
        }
        
        if (numeroDigitado < 8) {
            alert("La cantidad de caracteres debe ser mayor que 8");
            return;
        }
        
        
        let password = ''; 
        for (let i = 0; i < numeroDigitado; i++) {
            const caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
            password += caracterAleatorio;
        }
        
        
        contrasena.value = password;

        
        evaluarFortaleza(password);
    }

    function evaluarFortaleza(password) {
        const tieneMayuscula = /[A-Z]/.test(password);
        const tieneMinuscula = /[a-z]/.test(password);
        const tieneNumero = /\d/.test(password);
        const tieneEspecial = /[!@#$%^&*()]/.test(password);

        
        if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
            mensajeFortaleza.textContent = "Contraseña Fuerte";
            mensajeFortaleza.style.color = "green";
        } else {
            mensajeFortaleza.textContent = "Contraseña Débil";
            mensajeFortaleza.style.color = "red";
        }
    }

    function limpiar() {
        cantidad.value = '';
        contrasena.value = '';
        mensajeFortaleza.textContent = ''; 
    }

    botonGenerar.addEventListener('click', generar);
    botonLimpiar.addEventListener('click', limpiar);
});
