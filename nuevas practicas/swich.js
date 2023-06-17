var numero = 11;

switch(numero){
    case 1:
        console.log("Soy uno!");
        break;
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
}
export function solution(article) {
    switch (true) {
      case (article == "computadora"):
        return "Con mi computadora puedo programar usando JavaScript";
      case (article == "celular"):
        return "En mi celular puedo aprender usando la app de Platzi";
      case (article == "cable"):
        return "¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado";
    }
  }
 
   solution('computadora')
   solution('celular')
   solution('cable')
   solution('ornitorrinco')