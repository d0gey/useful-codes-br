function TestaCPF(strCPF: string) {
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
