
const mostrarResultado = () => {
    for (var i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            crearNodo("FIZZBUZZ ")
        }
        else if (i % 3 == 0) {
            crearNodo("FIZZ ")
        }
        else if (i % 5 == 0) {
            crearNodo("BUZZ ")
        } else {
            crearNodo("Neither ")
        }
    }
}

const crearNodo = (texto) => {
    const elemento = document.createElement("li")
    const contenido = document.createTextNode(texto)
    elemento.appendChild(contenido)
    const lista = document.getElementById("lista")
    lista.appendChild(elemento)
}
mostrarResultado()


