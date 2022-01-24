function myFunc() {
  let myArr = [
    {
      souEu: true,
      responsavel: true,
      nome: "Pedro",
    },
    {
      souEu: false,
      responsavel: true,
      nome: "Vitor",
    },
    {
      souEu: true,
      responsavel: false,
      nome: "Júlo",
    },
  ];

  let souEu = [];
  let responsavel = [];
  let naoResponsvel = [];

  let organizar = myArr.map(function (el, i) {
    if (el.souEu) {
      souEu.push(el.nome);
    }
    if (el.responsavel) {
      responsavel.push(el.nome);
    }
    if (el.responsavel === false) {
      naoResponsvel.push(el.nome);
    }
    return responsavel;
  });

  console.log(souEu.sort());
  console.log(responsavel.sort());
  console.log(naoResponsvel.sort());
}

myFunc();
