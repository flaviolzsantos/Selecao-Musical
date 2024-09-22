
# CompanyHero Project

Este projeto é uma API que utiliza dados de clima para sugerir playlists baseadas na temperatura da cidade informada.

## Tecnologias Utilizadas

- Node.js: Plataforma utilizada para o desenvolvimento da API.
- Axios: Usado para realizar chamadas HTTP para a API de clima.
- Vitest: Framework de testes utilizado para testes unitários e de integração.
- Docker: Utilizado para containerizar a aplicação e garantir a portabilidade.
- dotenv: Carrega variáveis de ambiente a partir de um arquivo .env.
- Cache em memória com TTL (Time to Live) parametrizado em variável de ambiente em milesegundos. Implementado feature toggle para ligar e desligar o cache se necessário.

## Requisitos

- Node.js (versão 14+)
- npm (versão 6+)
- Docker (opcional, se desejar rodar a aplicação em contêiner)


## Configuração do Ambiente

1. Clonar o Repositório

```bash
  git clone https://github.com/flaviolzsantos/CompanyHero.git
  cd CompanyHero
```

2. Instalar Dependências

Antes de rodar a aplicação, certifique-se de instalar todas as dependências:

```bash
  npm install
```

3. Configurar Variáveis de Ambiente
Crie um arquivo .env baseado no exemplo e adicione suas chaves de API:

```bash
  WEATHER_URL=https://api.hgbrasil.com/weather
  WEATHER_API_KEY=70866c48
  CACHE_VALUE_MILISECOUNDS=60000
  CACHE_IS_ON=true
```

4. Rodando a Aplicação

Localmente
```bash
  npm start
```
A aplicação estará disponível em http://localhost:3000.

Usando Docker
```bash
  npm run dockerBuild
  npm run dockerRun
```

5. Rodar Testes
Para rodar os testes com Vitest, use:
```bash
  npm run test
```

Se quiser ver a cobertura de teste, use:
```bash
  test:coverage
```

## Endpoints

GET /api/playlist?city={city}: Retorna uma playlist baseada na temperatura da cidade.


## Estrutura do Projeto

- src/: Código-fonte principal.
- tests/: Testes unitários e de integração.
- Dockerfile: Configuração para containerização da aplicação.
- package.json: Gerenciamento de dependências e scripts.

