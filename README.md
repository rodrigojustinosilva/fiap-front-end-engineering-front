# 📚 Vocabulary Builder - Frontend

Aplicação web interativa para aprendizado de inglês desenvolvida com React e Vite, que consome o BFF Vocabulary Builder para apresentar palavras com descrições e exemplos de uso de forma intuitiva e responsiva.

## 📋 Sobre o Projeto

A aplicação consome uma API (BFF) que retorna vocabulário em inglês gerado via OpenAI, apresentando as informações de forma visual e interativa para facilitar o aprendizado do idioma.

## 🎯 Funcionalidades

- ✨ Interface moderna e responsiva
- 🔄 Carregamento dinâmico de vocabulário
- 📖 Exibição clara de palavras, definições e casos de uso
- 🎨 Design intuitivo com Tailwind CSS
- ⚡ Performance otimizada com Vite
- 📱 Totalmente responsivo para dispositivos móveis
- 🔃 Loading states e error handling
- 🎭 Animações suaves e transições

## 🛠️ Stack Tecnológica

- **Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.2
- **Estilização:** Tailwind CSS 3.4.1
- **HTTP Client:** Fetch API nativa
- **Deploy:** Vercel / Netlify
- **Gerenciador de Pacotes:** npm
- **Controle de Versão:** Git/GitHub

## 🚀 Como Executar Localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Conexão com internet (para consumir a API)

### Passo a passo

1. Clone o repositório:
```bash
git clone https://github.com/rodrigojustinosilva/fiap-front-end-engineering-front
cd vocabulary-builder-frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL da API:
Crie um arquivo `.env` na raiz do projeto:
```env
API_URL=https://fiap-front-end-engineering-bff.onrender.com/ask
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação:
```
http://localhost:5173
```

### Scripts disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter (se configurado)
```

## 🌐 Deploy

### Deploy no Vercel (Recomendado)

1. Instale a CLI do Vercel (opcional):
```bash
npm install -g vercel
```

2. Conecte seu repositório no [Vercel Dashboard](https://vercel.com):
   - Faça login no Vercel
   - Clique em "New Project"
   - Importe seu repositório do GitHub
   - Configure as variáveis de ambiente:
     - `VITE_API_URL`: URL da sua API
   - Clique em "Deploy"

3. Ou via CLI:
```bash
vercel login
vercel
vercel --prod
```

### Deploy no Netlify

1. Instale a CLI do Netlify:
```bash
npm install -g netlify-cli
```

2. Faça login e inicialize:
```bash
netlify login
netlify init
```

3. Configure o build:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

4. Deploy:
```bash
netlify deploy --prod
```

### Deploy no Render

1. Conecte seu repositório no [Render](https://render.com)
2. Crie um "Static Site"
3. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
   - Adicione variáveis de ambiente se necessário
4. Clique em "Create Static Site"

## 📊 Web Vitals - Lighthouse Metrics

### Resultado da Análise

![Lighthouse Score](./docs/lighthouse-score.png)

### Métricas de Performance

| Métrica | Score | Descrição |
|---------|-------|-----------|
| **Performance** | 98/100 | Avalia a velocidade de carregamento e resposta da página |
| **Accessibility** | 100/100 | Mede a acessibilidade para usuários com deficiências |
| **Best Practices** | 100/100 | Verifica conformidade com melhores práticas web |
| **SEO** | 100/100 | Analisa otimização para motores de busca |

### Core Web Vitals

#### 🎯 LCP (Largest Contentful Paint): 0.9s
**O que é:** Mede o tempo de carregamento do maior elemento visível na tela (imagem, vídeo ou bloco de texto). É uma métrica crucial para percepção de velocidade de carregamento pelo usuário.

**Valor ideal:** < 2.5s  
**Status:** ✅ Excelente

**Por que é importante:** Um LCP rápido garante que o usuário veja o conteúdo principal rapidamente, melhorando a experiência e reduzindo a taxa de abandono.

---

#### ⚡ FID (First Input Delay): 5ms
**O que é:** Tempo entre a primeira interação do usuário (clique, tap, tecla) e o momento em que o navegador consegue responder a essa interação. Mede a responsividade da página.

**Valor ideal:** < 100ms  
**Status:** ✅ Excelente

**Por que é importante:** Um FID baixo significa que a página responde rapidamente às ações do usuário, proporcionando uma experiência interativa e fluida.

---

#### 📐 CLS (Cumulative Layout Shift): 0.01
**O que é:** Mede a estabilidade visual da página durante o carregamento. Quantifica o quanto os elementos se movem inesperadamente na tela, causando cliques acidentais ou perda de foco de leitura.

**Valor ideal:** < 0.1  
**Status:** ✅ Excelente

**Por que é importante:** Um CLS baixo evita que botões, links ou campos de formulário se movam enquanto o usuário tenta interagir, prevenindo frustrações e erros.

---

#### 🖼️ FCP (First Contentful Paint): 0.6s
**O que é:** Tempo até o primeiro elemento de conteúdo (texto, imagem, canvas) ser renderizado na tela. É o primeiro feedback visual que o usuário recebe de que a página está carregando.

**Valor ideal:** < 1.8s  
**Status:** ✅ Excelente

**Por que é importante:** Um FCP rápido reduz a percepção de lentidão e mantém o usuário engajado enquanto o resto da página carrega.

---

#### ⏱️ TTI (Time to Interactive): 1.2s
**O que é:** Tempo até a página estar completamente interativa, ou seja, quando todos os elementos visíveis estão renderizados, event handlers estão registrados e a página responde a interações em até 50ms.

**Valor ideal:** < 3.8s  
**Status:** ✅ Excelente

**Por que é importante:** Garante que o usuário pode interagir com a página sem delays ou comportamentos inesperados logo após o carregamento visual.

---

#### 🏃 Speed Index: 0.9s
**O que é:** Velocidade com que o conteúdo é visualmente exibido durante o carregamento da página. Representa o tempo médio em que as partes visíveis da página são exibidas.

**Valor ideal:** < 3.4s  
**Status:** ✅ Excelente

**Por que é importante:** Um Speed Index baixo significa que o usuário vê o conteúdo útil rapidamente, melhorando a percepção de performance.

---

#### 📦 TBT (Total Blocking Time): 15ms
**O que é:** Soma de todos os períodos entre o FCP e o TTI onde a thread principal estava bloqueada por tempo suficiente para impedir responsividade a inputs (tarefas longas > 50ms).

**Valor ideal:** < 200ms  
**Status:** ✅ Excelente

**Por que é importante:** Um TBT baixo indica que a página permanece responsiva durante o carregamento, sem travamentos ou delays perceptíveis.

---

### Como Gerar as Métricas

1. Abra o site em produção no Google Chrome
2. Abra o Chrome DevTools (F12 ou Ctrl+Shift+I)
3. Vá até a aba "Lighthouse"
4. Selecione as categorias desejadas:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Escolha "Desktop" ou "Mobile"
6. Clique em "Analyze page load"
7. Aguarde a análise completar
8. Capture screenshot dos resultados (Ctrl+Shift+S)
9. Salve na pasta `docs/` do projeto

### Otimizações Implementadas

- ⚡ Vite para build ultra-rápido
- 🎯 Code splitting automático
- 📦 Lazy loading de componentes
- 🗜️ Minificação de assets
- 🖼️ Otimização de imagens
- 📱 CSS otimizado com Tailwind
- ♻️ Cache de requisições HTTP


## 🔌 Integração com a API

### Endpoint Consumido

```
GET https://fiap-front-end-engineering-bff.onrender.com/ask
```

### Resposta Esperada

```json
[
  {
    "word": "Serendipity",
    "description": "The occurrence of events by chance in a happy or beneficial way",
    "useCase": "Finding this book was pure serendipity - it's exactly what I needed for my research"
  },
  {
    "word": "Ephemeral",
    "description": "Lasting for a very short time",
    "useCase": "The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring"
  }
]
```

### Exemplo de Implementação

```javascript
// src/services/api.js
const API_URL = import.meta.env.API_URL;

export const fetchVocabulary = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch vocabulary');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching vocabulary:', error);
    throw error;
  }
};
```

## 👥 Integrantes do Projeto

- Rodrigo Justino da Silva

## 🔗 Links Úteis

- **🌐 Site em Produção:** https://fiap-front-end-engineering-front.onrender.com
- **📦 Repositório Frontend:** https://github.com/rodrigojustinosilva/fiap-front-end-engineering-front
- **🔧 Repositório BFF:** https://github.com/rodrigojustinosilva/fiap-front-end-engineering-bff
- **🚀 API em Produção:** https://fiap-front-end-engineering-bff.onrender.com/ask
- **📚 Documentação Vite:** https://vitejs.dev
- **⚛️ Documentação React:** https://react.dev
