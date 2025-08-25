
## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:
- **Desktop:** Layout com sidebar fixa
- **Tablet:** Sidebar colapsável 
- **Mobile:** Menu hambúrguer com overlay

## 🔧 Customização

### Substituindo Conteúdo Fictício

O conteúdo está organizado em `src/data/mockData.ts`. Para substituir por dados reais:

1. **Edite as seções:**
   ```typescript
   // Exemplo: Atualizar conteúdo de uma subseção
   {
     id: 'gcp-innovation',
     title: 'GCP: A Força da Inovação...',
     content: 'SEU CONTEÚDO REAL AQUI'
   }
   ```

2. **Atualize tabelas comparativas:**
   ```typescript
   // Exemplo: Novos dados de pricing
   {
     id: 'storage-costs',
     title: 'Custos de Armazenamento...',
     rows: [
       { platform: 'AWS S3', data: ['$XX', '$XX', '$XX'] }
     ]
   }
   ```

3. **Modifique dados dos gráficos:**
   ```typescript
   // Exemplo: Novas métricas de performance
   export const chartData = [
     { name: 'Performance', gcp: 85, azure: 78, aws: 82 }
   ];
   ```

## 🚀 Deploy

### Build para Produção
```bash
npm run build
npm start
```

### Deploy Recomendado
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Azure Static Web Apps**

## 📈 Próximos Passos

### Funcionalidades Pendentes
1. **Sistema de busca completo** - implementar busca real no conteúdo
2. **Exportação PDF funcional** - integrar jsPDF para gerar relatórios
3. **Sistema de bookmarks** - salvar seções favoritas no localStorage
4. **Modo escuro** - implementar theme switcher
5. **Comentários/anotações** - permitir anotações pessoais

### Melhorias Sugeridas
1. **SEO otimizado** - meta tags dinâmicas por seção
2. **Analytics** - integração com Google Analytics
3. **Performance** - lazy loading de componentes
4. **Acessibilidade** - melhorar ARIA labels e navegação por teclado

## 🤝 Contribuição

Este projeto foi desenvolvido como base para relatório técnico. Para contribuir:
# Relatório Comparativo: Plataformas Big Data em Nuvem
1. Mantenha a estrutura modular
2. Siga os padrões TypeScript estabelecidos
3. Teste responsividade em diferentes dispositivos
4. Documente mudanças significativas

## 📄 Licença

Projeto desenvolvido para fins educacionais e empresariais.

---

**Desenvolvido com ⚡ Next.js e 💙 TypeScript**

Este projeto apresenta um site web completo para análise comparativa das principais plataformas de big data em nuvem: Google Cloud Platform (GCP), Microsoft Azure e Amazon Web Services (AWS).

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Recharts** - Biblioteca de gráficos responsivos
- **Lucide React** - Ícones modernos
- **jsPDF & html2canvas** - Exportação para PDF

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Charts/           # Componentes de gráficos
│   ├── Common/           # Componentes comuns (Cards, etc.)
│   ├── Layout/           # Componentes de layout
│   ├── Navigation/       # Navegação (Header, Sidebar)
│   └── Tables/           # Tabelas comparativas
├── data/                 # Dados fictícios para desenvolvimento
│   └── mockData.ts       # Dados estruturados do relatório
└── types/                # Definições TypeScript
    └── index.ts          # Interfaces e tipos
```

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar

1. **Clone o repositório:**
   ```bash
   cd cloud-platforms-report
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse o site:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📊 Funcionalidades Implementadas

### ✅ Navegação e Layout
- **Header responsivo** com busca e exportação PDF
- **Sidebar navegável** com menu hierárquico
- **Breadcrumbs** para orientação do usuário
- **Design responsivo** para desktop, tablet e mobile

### ✅ Conteúdo Estruturado
- **Página inicial** com overview das plataformas
- **Seções organizadas** conforme especificação:
  - Análise Estratégica das Plataformas
  - Comparativo Detalhado de Funcionalidades
  - Análise de Custo-Benefício e TCO
  - Segurança e Conformidade
  - Databricks como Alternativa
  - Tabelas Comparativas
  - Conclusões e Recomendações

### ✅ Visualizações
- **Gráficos comparativos** (barras e radar)
- **Tabelas responsivas** com cores das plataformas
- **Cards informativos** com estatísticas
- **Indicadores visuais** das plataformas (GCP, Azure, AWS)

### ✅ Experiência do Usuário
- **Interface intuitiva** para usuários não-técnicos
- **Cores das marcas** sutilmente incorporadas
- **Animações suaves** e transições
- **Sistema de busca** (estrutura implementada)
- **Bookmarks** (estrutura implementada)

## 🎨 Design System

### Cores das Plataformas
- **GCP:** #4285F4 (Azul Google)
- **Azure:** #0078D4 (Azul Microsoft)  
- **AWS:** #FF9900 (Laranja Amazon)

### Tipografia
- **Fonte principal:** Inter (Google Fonts)
- **Hierarquia clara** de títulos e texto
- **Espaçamento consistente**

