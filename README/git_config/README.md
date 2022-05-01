 ![image](https://user-images.githubusercontent.com/104688167/166146651-2b814220-4c46-4e76-8544-23bc1f7ebe18.png)


# Alterando o `git config`



A primeira coisa que você deve fazer ao instalar Git é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você começa a criar:

$ git config user.name "Fulano de Tal"
$ git config user.email fulanodetal@exemplo.br

Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando novamente com outras informações.


## Testando Suas Configurações

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
  
## Atenção não alterar o Git nos computadores da empresa apenas no seu computador pessoal
  
Fonte: https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git

