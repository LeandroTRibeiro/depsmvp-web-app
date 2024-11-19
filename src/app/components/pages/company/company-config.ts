export interface CompanyFieldConfig {
  label: string;
  value: string;
  type: 'text' | 'date' | 'currency' | 'boolean';
}

export const companyAddressConfig: CompanyFieldConfig[] = [
  { label: 'company.descricaoTipoDeLogradouro', value: 'descricaoTipoDeLogradouro', type: 'text' },
  { label: 'company.logradouro', value: 'logradouro', type: 'text' },
  { label: 'company.numero', value: 'numero', type: 'text' },
  { label: 'company.complemento', value: 'complemento', type: 'text' },
  { label: 'company.bairro', value: 'bairro', type: 'text' },
  { label: 'company.cep', value: 'cep', type: 'text' },
  { label: 'company.uf', value: 'uf', type: 'text' },
  { label: 'company.codigoMunicipio', value: 'codigoMunicipio', type: 'text' },
  { label: 'company.municipio', value: 'municipio', type: 'text' },
];

export const companyFieldsConfig: CompanyFieldConfig[] = [
  { label: 'company.identificadorMatrizFilial', value: 'identificadorMatrizFilial', type: 'text' },
  { label: 'company.descricaoMatrizFilial', value: 'descricaoMatrizFilial', type: 'text' },
  { label: 'company.nomeFantasia', value: 'nomeFantasia', type: 'text' },
  { label: 'company.situacaoCadastral', value: 'situacaoCadastral', type: 'text' },
  { label: 'company.descricaoSituacaoCadastral', value: 'descricaoSituacaoCadastral', type: 'text' },
  { label: 'company.dataSituacaoCadastral', value: 'dataSituacaoCadastral', type: 'date' },
  { label: 'company.motivoSituacaoCadastral', value: 'motivoSituacaoCadastral', type: 'text' },
  { label: 'company.nomeCidadeExterior', value: 'nomeCidadeExterior', type: 'text' },
  { label: 'company.codigoNaturezaJuridica', value: 'codigoNaturezaJuridica', type: 'text' },
  { label: 'company.dataInicioAtividade', value: 'dataInicioAtividade', type: 'date' },
  { label: 'company.cnaeFiscal', value: 'cnaeFiscal', type: 'text' },
  { label: 'company.cnaeFiscalDescricao', value: 'cnaeFiscalDescricao', type: 'text' },
  { label: 'company.dddTelefone1', value: 'dddTelefone1', type: 'text' },
  { label: 'company.dddTelefone2', value: 'dddTelefone2', type: 'text' },
  { label: 'company.dddFax', value: 'dddFax', type: 'text' },
  { label: 'company.qualificacaoDoResponsavel', value: 'qualificacaoDoResponsavel', type: 'text' },
  { label: 'company.capitalSocial', value: 'capitalSocial', type: 'currency' },
  { label: 'company.porte', value: 'porte', type: 'text' },
  { label: 'company.descricaoPorte', value: 'descricaoPorte', type: 'text' },
  { label: 'company.opcaoPeloSimples', value: 'opcaoPeloSimples', type: 'boolean' },
  { label: 'company.dataOpcaoPeloSimples', value: 'dataOpcaoPeloSimples', type: 'date' },
  { label: 'company.dataExclusaoDoSimples', value: 'dataExclusaoDoSimples', type: 'date' },
  { label: 'company.opcaoPeloMei', value: 'opcaoPeloMei', type: 'boolean' },
  { label: 'company.situacaoEspecial', value: 'situacaoEspecial', type: 'text' },
  { label: 'company.dataSituacaoEspecial', value: 'dataSituacaoEspecial', type: 'date' }
];
