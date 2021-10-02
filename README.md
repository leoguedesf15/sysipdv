<h1>SYSIpdv</h1>
<h2>Overview</h2>
<p>A aplicação foi construída com o Framework da Google, Angular, na versão 12. Dividida em camada de componentes e serviços. A modelagem de dados é feita através das interfaces Typescript. A aplicação consome o back em php para tráfego de informações e dados. Para o CSS foi utilizado CSS Materialize. O controle de autenticação e autorização está sendo feito pelo guarda de rotas em conjunto com a JWT (consumida do back), funcionando da seguinte maneira: O guarda de rotas verifica apenas se existe um token armazenado na sessão. Pra todos os efeitos, aos olhos do front, se existe um token a sessão é válida. Este token é passado no header das requests através do AuthInterceptor, que capta a requisição e acrescenta o header Authorization e Content-Type. O back verifica a validade do token e caso este não seja válido, o back retorna 401 e, o front, ao captar este evento, prepara o processo de "expulsão" do usuário da área restrita.</p>
<h2>Pré-requisitos</h2>
<ul>
    <li>Git</li>
    <li>Node.js com npm</li>
    <li>Framework Angular (testado com Angular 12)</li>
    <li>Angular CLI</li>
</ul>

<h2>Instruções</h2>
<ul>
    <li>Clonar o repositório</li>
    <li>npm install</li>
    <li>ng serve</li>
    <li>No Browser: http://localhost:4200</li>
</ul>