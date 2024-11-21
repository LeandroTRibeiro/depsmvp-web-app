# depsmvp-web-app 🌐

Frontend desenvolvido para consumir e apresentar os dados fornecidos pela **depsmvp-web-api**, facilitando a interação do usuário com as informações.

## 🚧 Este projeto está em construção 🚧

## Requisitos 📋

Antes de iniciar o projeto, certifique-se de ter instalado:

- **Node.js** (versão recomendada: LTS)
- **Angular CLI** (versão compatível com o projeto)

## Instalação 🛠️

### 1. Clonar o repositório
Clone o projeto para a sua máquina local:
```bash
git clone https://github.com/SeuUsuario/depsmvp-web-app.git
```

### 2. Instalar dependências
Acesse o diretório do projeto e instale as dependências:
```bash
cd depsmvp-web-app
npm install
```

### 3. Configurar variáveis de ambiente
Crie ou atualize o arquivo `environment.ts` com as configurações corretas da API:

#### Exemplo do arquivo `environment.ts`:
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5235/api/v1/'
};
```

Certifique-se de configurar o `apiUrl` apontando para o backend.

---

## Execução 🚀

### Rodar o servidor de desenvolvimento
Use o comando abaixo para iniciar o servidor:
```bash
ng serve
```

O projeto estará acessível em: `http://localhost:4200`.

### Build para produção
Para gerar a versão de produção do projeto, utilize:
```bash
ng build --prod
```

Os arquivos gerados ficarão disponíveis na pasta `dist/`.

---

## Estrutura do Projeto 📂

```
src/
├── app/
│   ├── components/   # Componentes reutilizáveis
│   ├── pages/        # Páginas principais
│   ├── services/     # Serviços para comunicação com APIs
│   ├── models/       # Modelos de dados usados no projeto
│   └── validators/   # Validações personalizadas
├── assets/           # Imagens, estilos globais, etc.
├── environments/     # Configurações para dev e prod
```

---

## Tecnologias Utilizadas 🛠️

- **Angular** (Framework principal)
- **Angular Material** (Componentes estilizados)
- **TypeScript** (Linguagem principal)
- **SCSS** (Estilos customizados)

---

## Licença ⚖️

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## Autor ✒️

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/111009157?s=400&u=ccf989df0bb9cf41495186f2bc0564c1b03b0d4e&v=4" width="100px;" alt=""/>

**Leandro Thiago Ribeiro** 👋

[![GitHub Badge](https://img.shields.io/badge/-LeandroTRibeiro-black?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/LeandroTRibeiro)](https://github.com/LeandroTRibeiro)

[![Linkedin Badge](https://img.shields.io/badge/-LeandroRibeiro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/ribeiro-leandro/)](https://www.linkedin.com/in/ribeiro-leandro/)

[![Gmail Badge](https://img.shields.io/badge/-leandrothiago_ribeiro@hotmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:leandrothiago_ribeiro@hotmail.com)](mailto:leandrothiago_ribeiro@hotmail.com)
