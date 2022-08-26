const num = Number(prompt("Digite um número"));

if (num % 2 === 0) {
  if (num % 3 === 0) {
    console.log("É divisivel por dois e por três");
  }
} else {
  console.log("Não é divisivel por dois ou por três");
}

if (num % 2 === 0 && num % 3 === 0) {
  console.log("Divisivel por dois e três");
} else {
  console.log("Não é divisivel");
}
