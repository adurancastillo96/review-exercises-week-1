// Lee el enunciado del siguiente algoritmo. 
// URL: https://www.codewars.com/kata/55908aad6620c066bc00002a - Kyu 7


function XO(str) {
    /** Recuerda que si usas estructuras o herramientas que no hemso visto en clase es posible que tus compañeros y compañeras te pregunten por ellas :) */
    // Inicializamos los contadores
    let xCounter = 0;
    let oCounter = 0;
    // Recorremos la string
    //for (let i = 0; i < str.length; i++) {
    //    let letter = str[i].toLowerCase(); // Creamos una variable que guarde el índice en minúsculas

    //    if (letter === "x") {
    //        xCounter++;
    //    } else if (letter === "o") {
    //        oCounter++;
    //    }
    //}

    for (const value of str) {
        letter = value.toLowerCase(); // Creamos una variable que guarde el índice en minúsculas

        if (letter === "x") {
            xCounter++;
        } else if (letter === "o") {
            oCounter++;
        }
    }

    return xCounter === oCounter;
}

console.log(XO('xo'));                  // true
console.log(XO('XO'));                  // true
console.log(XO('xxxoo'));               // false
console.log(XO('xxOo'));                // true
console.log(XO(''));                     // true
console.log(XO('asdafdgsd'))             // true
console.log(XO("xadsdadsadsadsaoasdasdasdo")) //false