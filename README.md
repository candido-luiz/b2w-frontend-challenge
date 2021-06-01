# B2W Front-End Challenge 

Implementação front-end do desafio da B2W, disponível no repositório [frontend-challenges](https://github.com/felipefialho/frontend-challenges).

## Sobre 
O desafio consiste em implementar uma aplicação front-end, responsiva, baseada em layouts predeterminaddos e API para busca de dados. O sistema deve fazer uma requisição a API e então montar o layout com os dados recebidos.

## Tecnologias 
[React](https://pt-br.reactjs.org/) para a criação das interfaces.

API [Context](https://pt-br.reactjs.org/docs/context.html) para o gerenciamento de estados. 

## Instalando e Rodando a aplicação 
Para instalar a aplicação, é necessário possuir o gerenciador de pacotes [npm](https://www.npmjs.com/), instalado junto com o [Node](https://nodejs.org/en/). 
#### Clone do repositório: 
```
git clone git@github.com:candido-luiz/b2w-frontend-challenge.git    
```
#### Instalando: 
No diretório onde realizou o clone do projeto:

```
cd b2w-frontend-challenge
```
Instalar dependências:
```
npm install
```

#### Rodando a aplicação:
```
npm start
``` 
## Features
Baseado nos Layouts disponibilizados, desenvolver uma página que exiba informações de usuários.
- [x] Ao carregar a página, as informações exibidas devem ser as suas próprias informações pessoais. 
- [x] Ao clicar no botão 'try the next one', a página deve chamar a [API](https://randomuser.me/api/) que retorna dados de usuários randômicos e exibi-los na tela.
- [x] Ao clicar no botão 'Follow' a página deve armazenar essa informação. Caso o mesmo usuário seja exibido novamente o botão deve aparecer como 'Following' e com cor diferente.
- [x] Ao seguir um usuário, deverá ser exibido um link na parte superior direita da página. 
- [x] Ao clicar no link, uma lista com os usuários seguidos deve ser exibida.
- [x] Ao clicar em 'users_like.me', retornar a página inicial, mostranto suas informações pessoais.

### Links
Layouts: [Layout1](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about.jpg), [Layout2](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_following.jpg) e [Layout3](https://github.com/b2w-marketplace/challenge-front/blob/master/files/layout-about_followers-list.jpg).

API: [RandomUser](https://randomuser.me/api/).