// Armando una ensalada //
let ensalada = "";
let ingredientes;

do {
    ingredientes = prompt("Qué sabores te gustaría en tu ensalada? Escribe 3 ingredientes y acepta. Escribe ESC para terminar.");
    if (ensalada != "ESC") {
        ensalada = ensalada + ingredientes + "\n";
    }
} while (ingredientes != "ESC");

console.log("Tu ensalada contiene:");
console.log(ensalada);

