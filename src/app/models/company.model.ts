export interface Company {
  cnpj: string,
  identificadorMatrizFilial: number,
  descricaoMatrizFilial: string,
  razaoSocial: string,
  nomeFantasia: string,
  situacaoCadastral: number,
  descricaoSituacaoCadastral: string,
  dataSituacaoCadastral: string,
  motivoSituacaoCadastral: number,
  nomeCidadeExterior: string,
  codigoNaturezaJuridica: number,
  dataInicioAtividade: string,
  cnaeFiscal: number,
  cnaeFiscalDescricao: string,
  descricaoTipoDeLogradouro: string,
  logradouro: string,
  numero: string,
  complemento: string,
  bairro: string,
  cep: string,
  uf: string,
  codigoMunicipio: number,
  municipio: string,
  dddTelefone1: string,
  dddTelefone2: string,
  dddFax: string,
  qualificacaoDoResponsavel: number,
  capitalSocial: number,
  porte: string,
  descricaoPorte: string,
  opcaoPeloSimples: true,
  dataOpcaoPeloSimples: string,
  dataExclusaoDoSimples: string,
  opcaoPeloMei: true,
  situacaoEspecial: string,
  dataSituacaoEspecial: string,
  cnaesSecundarios: [
    {
      codigo: number,
      descricao: string
    }
  ],
  qsa: [
    {
      identificadorDeSocio: number,
      nomeSocio: string,
      cnpjCpfDoSocio: string,
      codigoQualificacaoSocio: number,
      percentualCapitalSocial: number,
      dataEntradaSociedade: string,
      cpfRepresentanteLegal: string,
      nomeRepresentanteLegal: string,
      codigoQualificacaoRepresentanteLegal: number
    }
  ]
}
