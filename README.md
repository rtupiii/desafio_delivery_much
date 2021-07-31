
## Desafio Delivery Much QA

Esse teste tem como objetivo a validação de funcionamento da API disponível em:

> http://challengeqa.staging.devmuch.io

### Como os testes foram feitos

Para essa validação foram usados:

- [node.js](https://nodejs.org/en/)
- [SuperTest](https://github.com/visionmedia/supertest "SuperTest")
- [Jest](https://jestjs.io)
- [Chai](https://www.chaijs.com)
- [Chai-Json-Schema](https://www.chaijs.com/plugins/chai-json-schema/)
- [Postman](https://www.getpostman.com/collections/5e6ffb5d1f7484f55468)

### Como os testes foram dispostos

Foram feitas requisições na API para validação de:
- Status code
- Contrato
- Headers
- Response Body

Existe um teste feliz, com o resultado esperado e cenários tristes, também validados.

No teste feliz foram usados:

> http://challengeqa.staging.devmuch.io/10

- Status code 200;
- Teste de contrato de acordo com o retorno encontrado via collection no postman;
- Header mostrando que se trata de um JSON;
- Body com o retorno por "extenso" com o número "10"

No teste trise foram usados:

> http://challengeqa.staging.devmuch.io/999999 (Fora do range)

- Status code 400;
- Teste de contrato de acordo com o retorno encontrado via collection no postman;
- Header mostrando que se trata de um JSON;
- Body com o retorno por "extenso" com a mensagem de "Invalid data"

### Como eu rodo os testes

Para rodar os testes, você deve baixar o repositório em uma pasta local e ter as todas as dependências descritas no tópico*"Como os testes foram feitos"*.

Após a instalação do node.js e das bibliotecas, o script de teste deverá ser:

> npm run "ambiente" "pasta"
> npm run qa test

Ou, para rodar o arquivo especificamente:

> npm run qa test/portugues.test.js
> npm run qa test/english.test.js


#### Reports dos testes

Ao rodar o script, um arquivo é gerado em html com o nome "jest_html_reporters".

Nele, podemos verificar que todas as verificações em relação à API criada estão funcionais, menos o status code da API que retorna o resultado em Inglês e tem uma requisição fora do range (cenário triste).