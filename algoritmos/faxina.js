let pessoa = {
  nome: "Pedro",
  idade: 19,
  sobreNome: null,
};

function myfunc(obj) {
  for (let i in obj) {
    if (!obj[i]) {
      delete obj[i];
    }
  }

  return obj;
}

console.log(myFunc(pessoa));
