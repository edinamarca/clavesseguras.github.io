function generarClave() {
    // Obtener la longitud de la clave
    const longitud = document.getElementById("longitud").value;

    // Generar la clave
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const clave = "";
    for (let i = 0; i < longitud; i++) {
        clave += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    // Mostrar la clave
    document.getElementById("clave").innerHTML = clave;
}