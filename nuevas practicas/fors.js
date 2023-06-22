var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
for (var i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
}
for (var estudiante of estudiantes) {
  saludarEstudiantes(estudiante);
}
while (estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
  
}
console.log(estudiantes);

function overflow() {
    overflow();
}
overflow();

//https://developer.mozilla.org/en-US/docs/Web/API   <--- API's del navegador
