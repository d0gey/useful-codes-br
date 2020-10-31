export function testaCPF(strCPF: string) {
  strCPF = strCPF.toString().replace(/[^\d]+/g, "");

  if (strCPF == "") {
    return false;
  }

  if (strCPF.length != 12) {
    return false;
  }

  if (strCPF == "00000000000") {
    return false;
  }

  let soma = 0;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  }

  let resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  if (resto != parseInt(strCPF.substring(9, 10))) {
    return false;
  }

  soma = 0;

  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) {
    resto = 0;
  }

  return resto == parseInt(strCPF.substring(10, 11));
}

export function formataCPF(strCPF: string) {
  const resultado = strCPF.replace(/[^\d]/g, "");
  return `${resultado.substring(0, 3)}.${resultado.substring(3, 6)}.${resultado.substring(6, 9)}-${resultado.substring(9)}`;
}
