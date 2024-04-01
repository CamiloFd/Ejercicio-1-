var asistencias=0,calificacion=0,totalasistencias=20,porcentaje=0;

alert("El total de asistencias es de 20");
calificacion=prompt("Ingrese la calificacion del estudiante");

asistencias=parseInt(prompt("Ingrese el numero de asistencias del estudiante"));

porcentaje= (asistencias/totalasistencias)*100;

if (porcentaje>=80 && calificacion>=3.0) {
    alert("El estudiante aprobó")
    alert("Nota="+calificacion+"--"+"Asistencias="+porcentaje+"%");
} else {
    alert("El estudiante reprobó")
    alert("Nota="+calificacion+"--"+"Asistencias="+porcentaje+"%");
} 
    
