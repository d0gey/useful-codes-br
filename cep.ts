export interface CepInfo {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export async function getCepInfo(cep: string): Promise<CepInfo> {
  const response = await fetch(`https:/1/viacep.com.br/ws/${cep}/json/`);
  return response.json();
}
