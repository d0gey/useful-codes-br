export function validarCNPJ(cnpj: string | number) {
  cnpj = cnpj.toString().replace(/[^\d]+/g, "");

  if (cnpj == "") {
    return false;
  }

  if (cnpj.length != 14) {
    return false;
  }

  // Elimina CNPJs invalidos conhecidos
  if (
    cnpj == "00000000000000" ||
    cnpj == "11111111111111" ||
    cnpj == "22222222222222" ||
    cnpj == "33333333333333" ||
    cnpj == "44444444444444" ||
    cnpj == "55555555555555" ||
    cnpj == "66666666666666" ||
    cnpj == "77777777777777" ||
    cnpj == "88888888888888" ||
    cnpj == "99999999999999"
  ) {
    return false;
  }

  // Valida DVs
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado.toString() != digitos.charAt(0)) {
    return false;
  }

  tamanho++;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += Number(numeros.charAt(tamanho - i)) * pos--;

    if (pos < 2) {
      pos = 9;
    }
  }

  return (soma % 11 < 2 ? 0 : 11 - (soma % 11)).toString() === digitos.charAt(1);
}

function FormataCNPJ(strCNPJ: string) {
  let resultado = strCNPJ.replace(/[^\d]/g, "");
  return `${resultado.substring(0, 2)}.${resultado.substring(2, 5)}.${resultado.substring(5, 8)}/${resultado.substring(8, 12)}-${resultado.substring(12)}`;
}
