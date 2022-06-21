let fechaNac = parseFloat(prompt("Ingresa tu año de nacimiento"))

if(fechaNac <= 2003) { 
    console.log("Sos mayor de 18, podés ingresar")
} else if(fechaNac ==2004 ) {
    console.log("Si naciste antes de Junio, sos mayor de 18, podés ingresar")
} else {
    console.log("Sos menor de 18, no podés ingresar")
}