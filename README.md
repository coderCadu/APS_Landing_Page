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
    ├── css/           # Estilos (Sass)
    ├── js/            # Scripts (Babel/ES6+)
    └── img/           # Imagens
```

## Tecnologias

- **Gulp** — automação de build (concatenação, minificação, otimização de imagens)
- **Sass** + **PostCSS/Autoprefixer** — estilos
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

Inicia o Gulp em modo *watch*, recompilando os arquivos automaticamente a cada alteração.

### Build de produção

```bash
yarn start
```

Gera os arquivos otimizados (HTML, CSS e JS minificados) na pasta `dist/`.

## Licença

Distribuído sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

## Autor

Carlos Eduardo — carlosedu.waldorf@gmail.com
