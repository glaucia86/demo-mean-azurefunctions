# Demo: Criando APIs Escaláveis com Node.js & Arquitetura Serverless

[![bit-community.png](https://i.postimg.cc/4yVhWzYt/bit-community.png)](https://postimg.cc/BPZ66PcQ)

Repositório responsável pelas demos feitas usando Azure Functions & MEAN (Mongo, Express, Angular & Node.js)

## Recursos Utilizados 🚀

- **[Visual Studio Code](https://code.visualstudio.com/?WT.mc_id=mean_azurefunctions-github-gllemos)**
- **[Node.js](https://nodejs.org/en/)**
- **[Extensão Visual Studio Code: Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=mean_azurefunctions-github-gllemos)**
- **[Conta Azure - Conta Gratuita](https://azure.microsoft.com/free/?WT.mc_id=mean_azurefunctions-github-gllemos)**

## Conta - Azure for Students ⭐️

Caso você seja um(a) estudante de alguma Instituição de Ensino de Faculdade ou Universidade, poderá criar sua conta no **[Azure for Students](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=mean_azurefunctions-github-gllemos)**. Essa conta te dará o benefício em possuir crédito de USD 100,00 para usar os serviços de maneira gratuita, sem necessidade de possuir um cartão de crédito. Para ativar essa conta, bastam acessar o link ao lado: **[AQUI](https://azure.microsoft.com/pt-br/free/students/?WT.mc_id=mean_azurefunctions-github-gllemos)**

## Executando a Aplicação Localmente ❗️

### Executando a aplicação no lado do Front-End

1) Instalar os pacotes com o comando: (dentro da pasta `front`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `front`):

```
> ng serve -o
```

Depois bastam abrir o browser em **localhost:4200** (porta padrão de uma aplicação Angular)

### Executando a aplicação no lado do Back-End

1) Instalar os pacotes com o comando: (dentro da pasta `api`)

``` 
> npm install
```

2) Depois executar o seguinte comando para executar a aplicação (dentro da pasta `api`):

```
> nodemon
```

Depois bastam abrir o postman em **localhost:8000** e testar as requisições.

## Executando a aplicação na api do Azure Functions

1. Para executar localmente a aplicação, você precisa primeiramente baixar o pacote npm do azure functions tools globalmente na sua máquina por meio do comando:

```bash
> npm i -g azure-functions-core-tools --unsafe-perm true
```

2. Vá até a pasta: `serverless-api-mongo` e crie na raiz principal do projeto o arquivo: `local.settings.json` e inclua o seguinte bloco de código:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "{AzureWebJobsStorage}"
  },
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "*"
  }
}
```

3. Execute o MongoDb ou MongoDb Compass!

4. Agora, abre novamente o seu prompt de comando e execute o comando:

```bash
> func host start
```

5. Agora vá até o projeto `front` e vá até: `src -> app -> palestrante.service.ts` e altere a linha `10` e inclua a seguinte uri:

```javascript
  uri = 'http://localhost:7071/api';
```

6. Execute a aplicação Front com o comando:

```bash
> ng serve -o
```

E vòilá! :heart: :heart:

## Links & Recursos Importantes ⭐️

Durante a live, comentei sobre importantes documentações, links e recursos que podem auxiliar o seu conhecimento sobre Serverless & Azure Functions

- ✅ **[Slides da Palestra - Criando API's Escaláveis com Node.js & Arquitetura Serverless](http://bit.ly/slides-braziljs19)**
- ✅ **[Azure para devs JavaScript & Node.js](https://docs.microsoft.com/pt-br/javascript/azure/?WT.mc_id=mean_azurefunctions-github-gllemos&view=azure-node-latest)**
- ✅ **[Documentação Azure Functions](https://docs.microsoft.com/pt-br/azure/azure-functions/?WT.mc_id=mean_azurefunctions-github-gllemos)**
- ✅ **[Criando a sua Primeira Função no Visual Studio Code](https://docs.microsoft.com/pt-br/azure/azure-functions/functions-create-first-function-vs-code?WT.mc_id=mean_azurefunctions-github-gllemos)**
- ✅ **[Extensão Vs Code – Azure Functions](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=mean_azurefunctions-github-gllemos)**
- ✅ **[E-Book Grátis - Azure Serverless Computing Cookbook](https://azure.microsoft.com/pt-br/resources/azure-serverless-computing-cookbook/?WT.mc_id=mean_azurefunctions-github-gllemos)**
- ✅ **[Cursos Grátis - Azure Functions](https://docs.microsoft.com/pt-br/learn/paths/create-serverless-applications/?WT.mc_id=mean_azurefunctions-github-gllemos)**
