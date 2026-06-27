# GreenTech — a harmonia entre natureza e inovação

Landing page da GreenTech, empresa que une sustentabilidade e tecnologia através de um sistema de descarte eletrônico consciente.

## Sobre o projeto

A landing page guia as pessoas para um modo seguro de descarte de eletrônicos, oferecendo um sistema de pontos que recompensa quem cuida do meio ambiente.

### Materiais aceitos

- Celulares antigos
- Pilhas e baterias
- Cabos
- TVs quebradas
- DVDs quebrados
- iPods antigos
- Notebooks e PCs quebrados
- Hardware em geral

## Estrutura do projeto

```
src/
├── index.html        # Página inicial
├── about/             # Página "Sobre"
├── contact/           # Página "Contato"
└── assets/
    ├── css/           # Estilos
    ├── js/            # Scripts (Babel/ES6+)
    └── img/           # Imagens
```

## Tecnologias

- **Webpack** — bundling, minificação e otimização de assets
- **PostCSS/Autoprefixer** — estilos
- **Babel** — transpilação de JavaScript
- **Axios** — requisições HTTP

## Como executar

### Pré-requisitos

- Node.js
- Yarn

### Instalação

```bash
yarn install
```

### Desenvolvimento

```bash
yarn dev
```

Inicia o `webpack-dev-server` em modo desenvolvimento, recompilando os arquivos automaticamente a cada alteração e abrindo o navegador em `http://localhost:8080`.

### Build de produção

```bash
yarn build
```

Gera os arquivos otimizados (HTML, CSS e JS minificados) na pasta `dist/`.

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

## Autor

Carlos Silva — carlosedu.waldorf@gmail.com

Thiago Marques - thiagomarques1999@gmail.com

Kelly Moana - kellymoanabrasil@gmail.com
