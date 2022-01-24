function myfunc(date, string) {
  const currentDt = new Date();
  const validade = new Date(date);

  validade.setDate(validade.getDate() + Number(string.replace(/\D/g, "")));

  if (validade > currentDt) {
    console.log(`${validade.toDateString()}  Ainda vai expirar`);
  } else {
    console.log(`${validade.toDateString()} Expirou`);
  }
}

myfunc("2022-01-20T00:00:00.000Z", "10d");
myfunc("2022-01-20T00:00:00.000Z", "1d");
