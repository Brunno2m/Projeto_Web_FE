## Componentes do projeto:

# Brunno de Melo Marques e Igor Fabrício de Almeida Silva

## Apresentação:

# Introdução 

O projeto desenvolvido é um site de uma loja de venda de carros, implementado em Angular com TypeScript, com o objetivo de oferecer uma interface intuitiva e responsiva para a navegação e compra de veículos. A aplicação foi estruturada para atender aos requisitos mínimos estabelecidos, tanto em termos de funcionalidade quanto de usabilidade, utilizando boas práticas de desenvolvimento com estruturas básicas e funcionalidades restritas. 

# Estrutura e Componentes 

A aplicação é composta por três componentes principais, seguindo a arquitetura modular do Angular: 

Header: O primeiro componente foi o Header que é basicamente composto de uma barra de navegação onde foi adicionado a logo da empresa e um menu para navegação da página. Foram utilizadas classes Bootstrap para estilização e responsividade que é função do site se adaptar a diversas telas 

Main: No corpo principal da página, foi adicionada um lista de carros que foi adicionada a mão como um objeto no main.component.ts mas que na apresentação pode ser falado que a lógica foi implementada e caso numa próxima atualização, vocês queiram adicionar um API para fazer a comunicação do site com um eventual banco de dados que contenham os carros da loja cadastrados é uma ótima ideia. Também foram adicionados os seguintes requisitos no Main: 

Diretiva *ngFor para iterar sobre uma lista de objetos (carros). Um FOR especial do angular que é utilizado diretamente no HTML para renderizar os componentes de uma lista. 

Event Binding para adicionar funcionalidades, como adicionar o carro ao carrinho de compras ao clicar em um botão. 

Interpolação para exibir títulos e links dinâmicos. 

Property Binding para personalizar atributos, como classes CSS para destacar a página ativa. 

Footer: Um componente que inclui um formulário de contato, onde os usuários podem enviar perguntas ou propostas. Este formulário utiliza: 

Two-way Data Binding ([(ngModel)]) para sincronizar os dados do formulário com o modelo subjacente. 

Validação de campos do formulário, utilizando o módulo FormsModule do Angular. 

Também foi adicionado um botão de voltar ao topo quando scrolar a página para baixo. 

Conceitos Aplicados do Angular 

Durante o desenvolvimento, os seguintes conceitos do Angular foram aplicados: 

Componentes Reutilizáveis: Cada seção do site foi projetada como um componente independente, facilitando a manutenção e reutilização de código. 

Data Binding: 

Interpolação: Utilizada para exibir informações de forma dinâmica, como o título da página e os detalhes dos carros. 

Property Binding: Aplicada para ajustar propriedades HTML/CSS dinamicamente, como estilos responsivos. 

Event Binding: Usado para capturar eventos de interação do usuário, como cliques em botões. 

Two-way Binding: Implementado no formulário de contato para capturar os dados inseridos pelo usuário. 

# Diretivas Estruturais: 

*ngIf para renderizar condicionalmente elementos na interface. 

*ngFor para gerar dinamicamente listas de itens com base nos dados disponíveis. 

Personalização com Bootstrap 

Para garantir um design responsivo e visualmente atraente, foi utilizada a biblioteca Bootstrap. A aplicação apresenta: 

Um tema customizado, definido por variáveis como primaryColor e secondaryColor, integrando-se ao Bootstrap para uma paleta de cores consistente. 

Pelo menos quatro classes do Bootstrap, como container, row, col, e btn, para estruturar e estilizar os componentes. 

Estilos adaptativos, assegurando que o site funcione bem em diferentes dispositivos e tamanhos de tela. 

# Conclusão 

O site foi projetado para trabalhar os principais pontos vistos na apresentação do projeto trabalhando os conceitos e funcionalidades básicas. É uma boa estrutura de front para ser posteriormente trabalhado e melhorado com a adição de um backend e novas funcionalidade que podem ser mostradas na apresentação do trabalho, como a implementação de um carrinho de compras e a adição de carros cadastrados pela loja em um banco de dados com filtros para procura dos clientes.

# FB Motors

FB Motors é um site de e-commerce para venda de carros.

## Requisitos e tecnologias usadas

- **Angular** para o frontend
- **Bootstrap** para responsividade
- **Componentização** com Angular

## Como Executar

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
