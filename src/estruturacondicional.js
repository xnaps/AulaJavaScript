let peso = 74;
let altura = 1.73;
let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
  console.log("Peso Normal");
} else if (imc >= 25.0 && imc <= 29.9) {
  console.log("Excesso de Peso");
} else if (imc >= 30.0 && imc <= 34.9) {
  console.log("Obesidade Classe 1");
} else if (imc >= 35.0 && imc <= 39.9) {
  console.log("Obesidade Classe 2");
} else if (imc >= 40.0) {
  console.log("Obesidade Classe 3");
} else if (imc < 18.5) {
  console.log("Abaixo do peso normal");
}
