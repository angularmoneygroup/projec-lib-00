# Estruturação de Projetos

Sabemos que um aplicação Angular é composto por diversos elementos como módulos, componentes, templates e serviços. 
Já sabendo qual o contexto do nosso projeto então vamos montar uma estrutura por camadas. 
A imagem a seguir dá uma melhor visibilidade de como funcionará as interações entre módulo e a API.

<div align="center">
  <img src=https://user-images.githubusercontent.com/104688167/166150440-63136a57-75f0-4703-9ce0-8fe031f690e2.png>
</div>
  
## Como seria nossa estrutura de pastas do nosso projeto pensando na escalabilidade?

<div align="center">
  <img height="500em" src="https://user-images.githubusercontent.com/104688167/166150379-0e0a26ad-d77f-4ce9-9fdc-6dfc05bd80f2.png">
</div>
  
<br>
<ul>
  <li><b>Core:</b> Arquivos essenciais para a aplicação;</li>
  <li><b>Shared:</b> onde ficarão os Dumb Components, que são componentes que não fazem nada por conta própria;</li>
  <li><b>Pages:</b> São as páginas do nosso projeto onde estarão disponível os Smart Components.</li>
</ul>

<br>

<b>Core:</b> nesse diretório ficarão disponíveis os serviços singleton, tokens de injeção, constantes, configurações da aplicação, pipes, interceptors, guards, auth, service, utils. etc. São arquivos que serão usados em toda aplicação. Se conter algo que seja específico para a própria aplicação, implementação, CI/CD e API então colocamos no Core.

<b>Shared:</b> considere os módulos compartilhados como uma mini-biblioteca para seus componentes de IU. Eles não são específicos para um único recurso de negócios. Eles devem ser Dumb Components onde você possa pegá-los e colocar em outro projeto angular que funcione, não esquecendo que neste caso, as dependências sejam atendidas.

Um alerta para nosso SharedModule é que devemos ficar atentos em não deixá-lo gigantesco.Para evitar que isso ocorra é granularizar pensando em uma metodologia "Atomic Design" ou "Design Atômico" com a intenção de deixar caracterizada como um mini-biblioteca personalizada.

<b>Pages:</b> o diretório de páginas é a parte mais interessante dessa nossa arquitetura. Vamos pensar como uma "sink" ou um funil, onde os módulos de recursos caem, mas nada sai ou seja, nada exportado. As controllers não terão lógica de negócios. Eles são meramente apresentador e orquestrador do componentes dos módulos de recursos de negócio.

<br>
Fonte: https://dev.to/godoi/como-estruturar-sua-aplicacao-angular-26pg
