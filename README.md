# 🎯 Metas 2026 - Aplicação de Gestão de Objetivos

Uma aplicação web interativa e moderna para ajudar você a organizar, acompanhar e conquistar suas metas pessoais e profissionais para 2026.

## 📋 Sobre o Projeto

**Metas 2026** é uma aplicação desenvolvida em React com Vite que permite os usuários definir e gerenciar seus objetivos de forma simples e intuitiva. A aplicação está dividida em duas categorias principais:

- **Pessoal**: objetivos de desenvolvimento pessoal, saúde, relacionamentos, etc.
- **Carreira**: objetivos profissionais, aprendizados e crescimento na carreira

> _"Defina seus objetivos, acompanhe seu progresso e transforme seus sonhos em realidade."_

---

## ✨ Funcionalidades Implementadas

### ✅ Core Features

- **Criação de Tarefas**: Adicione novas metas em duas categorias (Pessoal e Carreira)
- **Acompanhamento de Progresso**: Marque tarefas como concluídas com um simples clique
- **Gerenciamento de Tarefas**: Delete tarefas que não são mais relevantes
- **Interface Responsiva**: Design limpo e amigável com SCSS modules
- **Fast Refresh**: Desenvolvimento ágil com HMR (Hot Module Reload)
- **Linting**: ESLint configurado para manter a qualidade do código

### 🔧 Stack Tecnológico

- **React 19.2.0**: Framework moderna para construção de UIs
- **Vite 7.2.4**: Build tool rápido e moderno
- **Sass/SCSS**: Estilização avançada com CSS modules
- **ESLint**: Análise estática de código para melhor qualidade

---

## 🚀 Primeiros Passos

### Pré-requisitos

- Node.js 16.0.0 ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone [seu-repositório]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Compila para produção
npm run preview  # Visualiza o build de produção
npm run lint     # Executa o ESLint para verificar qualidade do código
```

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Card/              # Componente de categoria (Pessoal/Carreira)
│   │   ├── Card.jsx
│   │   └── Card.module.scss
│   ├── Titulo/            # Componente de título principal
│   │   ├── Titulo.jsx
│   │   └── Titulo.module.scss
│   └── Footer/            # Componente de rodapé
│       ├── Footer.jsx
│       └── Footer.module.scss
├── App.jsx                # Componente principal
├── App.scss               # Estilos globais
└── main.jsx               # Ponto de entrada
```

---

## 🛠️ Arquitetura

### Componentes Principais

**Card Component** (`Card.jsx`)

- Gerencia a lista de tarefas para cada categoria
- Controla estado de tarefas (adicionar, editar, deletar, marcar como concluída)
- Renderiza a interface de entrada de dados e lista de tarefas

**App Component** (`App.jsx`)

- Componente raiz que organiza a estrutura geral
- Renderiza os dois cards de categorias (Pessoal e Carreira)
- Define o layout responsivo

---

## 🎯 Funcionalidades Futuras

### 🔄 Em Planejamento

- ☑️ **Persistência em localStorage**: Salve suas metas automaticamente no navegador
- 📊 **Dashboard com Estatísticas**: Visualize o progresso geral (% de conclusão, metas concluídas, etc.)
- 🏆 **Sistema de Pontuação**: Ganhe pontos ao completar objetivos
- 📅 **Data Limite**: Defina datas para cada meta e receba notificações
- 🏷️ **Categorias Customizáveis**: Crie suas próprias categorias além de Pessoal e Carreira
- 🎨 **Temas Personalizáveis**: Escolha entre temas escuro/claro
- 📱 **Progressive Web App (PWA)**: Use a app offline
- 🔐 **Autenticação**: Login e sincronização na nuvem
- 📤 **Exportar Metas**: Baixe seus objetivos em PDF ou JSON
- 🤝 **Compartilhamento de Metas**: Convide amigos para metas em comum

---

## 💡 Como Contribuir

Este projeto é um ótimo exemplo de:

- ✔️ Componentes React funcionais com Hooks
- ✔️ Gerenciamento de estado com useState
- ✔️ CSS Modules para estilização encapsulada
- ✔️ Boas práticas de desenvolvimento com Vite
- ✔️ Estrutura clara e escalável

---

## 📝 Licença

ISC

---

## 👨‍💻 Desenvolvedor

Projeto desenvolvido com foco em boas práticas de desenvolvimento front-end e experiência do usuário.
