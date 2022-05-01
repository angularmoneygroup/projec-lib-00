 <div>
  <a href="https://github.com/angularmoneygroup">
  <img height="152em" src="https://github-readme-stats.vercel.app/api?username=angularmoneygroup&show_icons=true&theme=dark&include_all_commits=true"/>
  <img height="152em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=angularmoneygroup&layout=compact&&langs_count=7&theme=dark"/>
</div>

# ProjectLib00

Esse projeto foi criado com o intuito de criar uma documentação/biblioteca para consulta

## Observações

1- Esse projeto só pode ser comitado com a conta da angularmoneygroup, o acesso a essa conta foi destribuido a vocês, caso não tenha por favor solicitar

2- Por favor conferir o `git config --list` se tiver algo como `user.name=Pablo Waniery` e o `user.email=pablowaniery@gmail.com` você pode commitar se não terá que alteralo mais tarde

### Atenção não alterar o Git nos computadores da empresa apenas no seu computador pessoal

## Alterando o `git config`

Fonte: https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git

A primeira coisa que você deve fazer ao instalar Git é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você começa a criar:

$ git config user.name "Fulano de Tal"
$ git config user.email fulanodetal@exemplo.br

Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando novamente com outras informações.


### Testando Suas Configurações

Se você quiser testar as suas configurações, você pode usar o comando git config --list para listar todas as configurações que o Git conseguir encontrar naquele momento:

$ git config --list
user.name=Fulano de Tal
user.email=fulanodetal@exemplo.br
color.status=auto
color.branch=auto
color.interactive=auto
color.diff=auto
...
Pode ser que algumas palavras chave apareçam mais de uma vez, porque Git lê as mesmas chaves de arquivos diferentes (/etc/gitconfig e ~/.gitconfig, por exemplo). Neste caso, Git usa o último valor para cada chave única que ele vê.

Você pode também testar o que Git tem em uma chave específica digitando git config <key>:

$ git config user.name
Fulano de Tal
  
====
