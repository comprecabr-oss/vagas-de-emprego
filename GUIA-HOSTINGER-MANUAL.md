# Guia Completo: Deploy Manual na Hostinger

## ⚠️ IMPORTANTE: Entenda Primeiro

Este projeto é um **aplicativo Next.js** com funcionalidades dinâmicas (React, localStorage, roteamento). A Hostinger oferece diferentes tipos de hospedagem:

1. **Hospedagem Compartilhada** (HTML/PHP) - NÃO suporta Next.js completo
2. **Hospedagem Node.js** - Suporta Next.js (se você tiver este plano)
3. **VPS** - Suporta tudo

---

## 🎯 OPÇÃO 1: Recomendada (Vercel + Domínio Hostinger)

Esta é a melhor opção: app completo funcionando + seu domínio personalizado.

### Passo 1: Deploy no Vercel (Grátis)

1. No v0, clique no botão **"Publish"** no topo direito
2. Conecte com sua conta GitHub
3. O Vercel fará deploy automático
4. Você receberá um link tipo: `https://seu-projeto.vercel.app`

### Passo 2: Conectar Domínio da Hostinger

1. **No Vercel:**
   - Vá em Settings → Domains
   - Adicione: `vagasdeemprego.store`
   - Vercel mostrará os registros DNS necessários

2. **Na Hostinger:**
   - Acesse o painel da Hostinger
   - Vá em **Domínios** → `vagasdeemprego.store` → **DNS/Nameservers**
   - Adicione os registros que o Vercel forneceu:
     \`\`\`
     Tipo: A
     Nome: @
     Valor: 76.76.21.21
     
     Tipo: CNAME
     Nome: www
     Valor: cname.vercel-dns.com
     \`\`\`
   - Salve e aguarde 24-48h para propagação

3. **Pronto!** Seu site estará em `vagasdeemprego.store` com todas as funcionalidades

---

## 🎯 OPÇÃO 2: Hostinger Node.js (Se você tem este plano)

### Requisitos:
- Plano Hostinger com suporte a Node.js
- Acesso SSH

### Passos:

1. **Baixar o Projeto:**
   - No v0, clique nos 3 pontos → **Download ZIP**
   - Extraia o arquivo

2. **Fazer Upload via FTP:**
   - Use FileZilla ou o File Manager da Hostinger
   - Faça upload de TODOS os arquivos para `public_html`

3. **Instalar Dependências (via SSH):**
   \`\`\`bash
   cd public_html
   npm install
   npm run build
   npm start
   \`\`\`

4. **Configurar Node.js na Hostinger:**
   - No painel Hostinger, vá em **Advanced** → **Node.js**
   - Defina:
     - Application Root: `/public_html`
     - Application Startup File: `server.js` ou `npm start`
     - Node.js version: 18.x ou superior

---

## 🎯 OPÇÃO 3: Apenas Landing Page Estática (Limitado)

Se você quer APENAS a página inicial na Hostinger (sem quiz, sem funil completo):

### Passo 1: Criar HTML Estático

Já criamos um arquivo `index.html` anteriormente. Você pode:

1. **Baixar o projeto**
2. **Pegar apenas o arquivo:** `index.html`
3. **Fazer upload na Hostinger:**
   - Acesse File Manager
   - Vá para `public_html`
   - Faça upload do `index.html`
   - Renomeie para `index.html` se necessário

### Limitações desta opção:
- ❌ Sem quiz funcional
- ❌ Sem funil gamificado
- ❌ Sem sistema de vagas
- ✅ Apenas landing page visual

---

## 🎯 OPÇÃO 4: Exportar Next.js como HTML Estático

Para exportar o Next.js como HTML estático (com limitações):

### Passo 1: Configurar Export

1. Adicione ao `next.config.mjs`:
\`\`\`js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
\`\`\`

2. No terminal (após baixar o projeto):
\`\`\`bash
npm install
npm run build
\`\`\`

3. Isso criará uma pasta `out/` com arquivos HTML estáticos

4. Faça upload de TUDO dentro da pasta `out/` para `public_html` na Hostinger

### Limitações:
- ❌ Sem Server Actions
- ❌ Sem API Routes
- ❌ Roteamento pode ter problemas
- ⚠️ Funcionalidades limitadas

---

## 📋 RESUMO: Qual Opção Escolher?

| Opção | Funcionalidades | Dificuldade | Custo |
|-------|----------------|-------------|-------|
| **Vercel + Domínio Hostinger** | ✅ 100% | Fácil | Grátis |
| **Hostinger Node.js** | ✅ 100% | Média | Pago |
| **Landing Page Estática** | ⚠️ 20% | Muito Fácil | Grátis |
| **Export Estático** | ⚠️ 60% | Média | Grátis |

---

## 🎯 RECOMENDAÇÃO FINAL

**Use a Opção 1 (Vercel + Domínio Hostinger)**

Motivos:
- ✅ Grátis
- ✅ Todas as funcionalidades funcionam
- ✅ Deploy automático
- ✅ SSL grátis
- ✅ CDN global
- ✅ Seu domínio personalizado

---

## 🆘 Precisa de Ajuda?

Me diga qual opção você quer seguir e te ajudo passo a passo!
