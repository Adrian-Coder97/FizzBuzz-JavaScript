# FizzBuzz-JavaScript

Programa que imprime los números del 1 al 100 y para los múltiplos de "3" imprime "Fizz", para los múltiplos de "5" imprima "Buzz", para los multiplos de ambos 3 y 5 imprime 
FIZZBUZZ y para los numeros sobrantes imprime "neither"

Program that prints the numbers from 1 to 100 and for the multiples of "3" it prints "Fizz", for the multiples of "5" it prints "Buzz", for the multiples of both 3 and 5 it prints
"FIZZBUZZ" and for the remaining numbers print "Neither"


- Codigo HTML con una lista ordernada: 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ol id="lista"></ol>
    <script src="/main.js"></script>
</body>
</html>
```

-Codigo JS: 
```
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
```


