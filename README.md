# 🛒 E-commerce App - React.js

> **Projeto desenvolvido para o curso de React.js da CoderHouse**

Um e-commerce completo desenvolvido com React.js, Firebase e Context API, seguindo as melhores práticas de desenvolvimento.

## 🚀 Funcionalidades

### ✅ Implementadas

- **Navegação por categorias** - Filtragem de produtos por categoria
- **Visualização de produtos** - Lista e detalhes individuais
- **Carrinho de compras** - Adicionar, remover e gerenciar quantidades
- **Sistema de estoque** - Controle de disponibilidade dos produtos
- **Integração Firebase** - Banco de dados em tempo real
- **Sistema de fallback** - Dados mock quando Firebase indisponível
- **Interface responsiva** - Design adaptável para mobile e desktop
- **Loading states** - Indicadores visuais de carregamento

### 🔧 Arquitetura

```
src/
├── components/
│   ├── common/
│   │   ├── NavBar.js          # Navegação principal
│   │   └── CartWidget.js      # Ícone do carrinho
│   └── products/
│       ├── Item.js            # Card individual do produto
│       ├── ItemList.js        # Lista de produtos
│       └── ItemDetail.js      # Detalhes do produto
├── context/
│   └── CartContext.js         # Estado global do carrinho
├── data/
│   └── mockProducts.js        # Dados de fallback
├── firebase/
│   └── config.js              # Configuração do Firebase
├── pages/
│   ├── ItemListContainer.js   # Container da lista
│   ├── ItemDetailContainer.js # Container de detalhes
│   └── Cart.js                # Página do carrinho
└── App.js                     # Configuração de rotas
```

## 🛠️ Tecnologias Utilizadas

| Tecnologia           | Versão | Propósito                   |
| -------------------- | ------ | --------------------------- |
| **React**            | 19.1.1 | Framework principal         |
| **Firebase**         | 12.0.0 | Backend e banco de dados    |
| **React Router DOM** | 7.7.1  | Navegação SPA               |
| **Create React App** | -      | Ambiente de desenvolvimento |

## 📦 Instalação e Execução

### 1. Clone o repositório

```bash
git clone [seu-repositorio]
cd ecommerce-app
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Firebase

Crie um arquivo `.env` na raiz do projeto:

```env
REACT_APP_API_KEY=sua_api_key
REACT_APP_AUTH_DOMAIN=seu_projeto.firebaseapp.com
REACT_APP_PROJECT_ID=seu_projeto_id
REACT_APP_STORAGE_BUCKET=seu_projeto.appspot.com
REACT_APP_MESSAGING_SENDER_ID=123456789
REACT_APP_APP_ID=1:123456789:web:abcdef
```

### 4. Execute o projeto

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🔥 Firebase Setup

### Configuração da Base de Dados

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Configure o Firestore Database
4. Adicione uma coleção `products` com os seguintes campos:

```javascript
{
  title: "Nome do Produto",
  price: 99.99,
  description: "Descrição detalhada...",
  category: "categoria",
  image: "https://exemplo.com/imagem.jpg",
  stock: 10
}
```

### Regras de Segurança (Firestore Rules)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{document} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

## 🎨 Características do Design

### 🌈 Paleta de Cores

- **Primary**: `#007bff` (Azul)
- **Success**: `#28a745` (Verde)
- **Danger**: `#dc3545` (Vermelho)
- **Dark**: `#343a40` (Cinza escuro)
- **Light**: `#f8f9fa` (Cinza claro)

### 📱 Responsividade

- **Grid Layout**: Auto-fit com minmax(300px, 1fr)
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Adaptação automática para diferentes tamanhos

## 🛣️ Rotas da Aplicação

| Rota                  | Componente          | Descrição                            |
| --------------------- | ------------------- | ------------------------------------ |
| `/`                   | ItemListContainer   | Página inicial com todos os produtos |
| `/category/:category` | ItemListContainer   | Produtos filtrados por categoria     |
| `/item/:id`           | ItemDetailContainer | Detalhes de um produto específico    |
| `/cart`               | Cart                | Carrinho de compras                  |

## 🔄 Fluxo de Dados

### Context API - CartContext

```javascript
// Estado global do carrinho
{
  cart: [],           // Array de produtos
  totalItems: 0,      // Quantidade total
  totalPrice: 0,      // Valor total
  addItem: fn,        // Adicionar produto
  removeItem: fn,     // Remover produto
  clear: fn           // Limpar carrinho
}
```

### Sistema de Loading

- **Estados de carregamento** para todas as operações assíncronas
- **Spinners animados** durante as requisições
- **Mensagens informativas** sobre o status da operação

## 🚨 Sistema de Fallback

### Dados Mock

Quando o Firebase não está disponível, a aplicação utiliza dados mock:

- **6 produtos de exemplo** em diferentes categorias
- **Simulação de estoque** e preços realistas
- **Imagens placeholder** para demonstração

### Indicadores Visuais

- **Banner de aviso** quando usando dados mock
- **Console logs detalhados** para debug
- **Tratamento de erros** com mensagens amigáveis

## 🎯 Funcionalidades Avançadas

### Gerenciamento de Estoque

- **Validação de disponibilidade** antes de adicionar ao carrinho
- **Indicadores visuais** de produtos em estoque
- **Limitação de quantidade** baseada no estoque disponível

### Sistema de Categorias

- **Navegação por categoria** no header
- **URLs semânticas** (`/category/eletronicos`)
- **Contadores de produtos** por categoria

### Experiência do Usuario

- **Hover effects** em botões e cards
- **Animações suaves** de transição
- **Feedback visual** para todas as ações

## 🐛 Debugging e Logs

### Console Logs Informativos

```javascript
=== TENTANDO FIREBASE ===
✅ Firebase conectado! Documentos encontrados: X
⚠️ Nenhum produto no Firebase, usando dados mock
❌ ERRO no Firebase: [detalhes do erro]
🔄 Carregando dados mock como fallback...
```

### Tratamento de Erros

- **Try-catch** em todas as operações assíncronas
- **Fallback automático** para dados mock
- **Mensagens de erro** amigáveis ao usuário

## 📝 Notas de Desenvolvimento

### Estrutura de Componentes

- **Separação clara** entre containers e componentes de apresentação
- **Props bem definidas** com documentação
- **Reutilização** de componentes comuns

### Boas Práticas

- **Hooks personalizados** para lógica complexa
- **Componentização** adequada
- **Estado local vs global** bem definido

## 🎓 Requisitos do Curso Atendidos

✅ **Single Page Application** com React  
✅ **Componentes funcionais** com hooks  
✅ **React Router** para navegação  
✅ **Context API** para estado global  
✅ **Firebase/Firestore** como backend  
✅ **Estrutura de componentes** organizada  
✅ **Gerenciamento de estado** adequado  
✅ **Interface responsiva** e moderna

---

## 🤝 Contribuição

Este projeto foi desenvolvido como parte do curso de React.js da CoderHouse.

### Autor

**Camila Macedo* - 71245 - React.js CoderHouse

---

## 📄 Licença

Este projeto é destinado exclusivamente para fins educacionais.

---

_Última atualização: Janeiro 2025_
