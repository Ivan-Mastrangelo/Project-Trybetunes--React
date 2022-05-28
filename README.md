# Sobre o projeto

Este projeto, desenvolvido em React, faz parte das avaliações do curso de desenvolvimento de software da escola Trybe. Nele foi solicitado a criação de um pequeno app de músicas ao estilo do itunes.

## Desenvolvimento

Diferente dos projetos anteriores, desenvolvidos em React, neste as funcionalidades do app foram agrupadas e organizadas em rotas, além de seguir com a prática do uso de múltiplos componentes. Também se fez uso dos métodos de ciclo de vida (lifecycle methods) e de estados para controlar o que é renderizado por seus componentes dependendo do momento em que as requisições se encontram.

Neste projeto solicitou-se criar o TrybeTunes, uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada, tornando a aplicação capaz de reproduzir as seguintes funcionalidades:

  - Fazer login;
  - Pesquisar por uma banda ou artista;
  - Listar os álbuns disponíveis dessa banda ou artista;
  - Visualizar as músicas de um álbum selecionado;
  - Reproduzir uma prévia das músicas deste álbum;
  - Favoritar e desfavoritar músicas;
  - Ver a lista de músicas favoritas;
  - Ver o perfil da pessoa logada;
  - Editar o perfil da pessoa logada;

  Outra diferença importante neste projeto em relação aos anteriores é que foi utilizado o método de consumo e envio de dados de e para APIs, para pesquisar a banda ou artista, recuperar as músicas de cada álbum e salvar as músicas favoritas, além de editar as informações da pessoa logada. Dessa forma tive que lidar com requisições assíncronas e promises. Para emular estes comportamentos a Trybe disponibilizou a pasta service, que contém os arquivos `favoriteSongsAPI.js`, `searchAlbumsAPI.js`, `userAPI.js` e `musicsAPI.js`. Esses arquivos são responsáveis por lidar com as requisições simuladas que foram usadas durante o desenvolvimento.

## Habilidades desenvolvidas neste projeto

  * Fazer requisições e consumir dados vindos de uma `API`;

  * Utilizar os ciclos de vida de um componente React;

  * Utilizar a função `setState` de forma a garantir que um determinado código só é executado após o estado ser atualizado
  
  * Utilizar o componente `BrowserRouter` corretamente;

  * Criar rotas, mapeando o caminho da URL com o componente correspondente, via `Route`;

  * Utilizar o `Switch` do `React Router`

  * Usar o componente `Redirect` pra redirecionar para uma rota específica;

  * Criar links de navegação na aplicação com o componente `Link`;

## Observações

Assim como a pasta service, os arquivivos index.js, .gitignore, .env, .eslintignore, .eslintrc.json, .stylelintignore, .stylelintrc.json foram fornecidos prontos pela escola.

### Para executá-lo localmente

Basta clonar o projeto:
```
git@github.com:Ivan-Mastrangelo/Project-Trybetunes--React.git
```
Entrar no diretório criado:
```
  cd Project-Trybetunes--React
  ```
Instalar as dependências do projeto:
```
  npm install
  ```
E iniciar o servidor:
```
  npm run start
  ```
Após esses comandos, acesse no navegador:
```
  http://localhost:3000/
  ```

---








