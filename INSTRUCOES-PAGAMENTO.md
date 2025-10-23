# Instruções de Integração com Gateway de Pagamento

## 1. Como Funciona o Fluxo

\`\`\`
Landing Page → Quiz → Vagas → Tenta 2ª vaga → Modal Premium → SEU CHECKOUT → Página de Retorno
\`\`\`

## 2. Configuração do Checkout Externo

### No arquivo `components/premium-modal.tsx`, linha 24:

\`\`\`typescript
const CHECKOUT_URL = "https://SEU-CHECKOUT-AQUI.com/produto"
\`\`\`

**Substitua por:**
- Kiwify: `https://pay.kiwify.com.br/SEU-PRODUTO`
- Hotmart: `https://pay.hotmart.com/SEU-PRODUTO`
- Eduzz: `https://sun.eduzz.com/SEU-PRODUTO`
- Outro gateway: URL fornecida pelo seu gateway

## 3. Link de Retorno (Entregável)

Após o pagamento, configure no seu gateway o link de retorno:

### Se publicar no Vercel (Recomendado):
\`\`\`
https://seu-projeto.vercel.app/acesso-liberado
\`\`\`

### Se usar domínio próprio:
\`\`\`
https://seudominio.com.br/acesso-liberado
\`\`\`

## 4. Página do Entregável Final

O link final com todas as 41 plataformas de vagas é:

\`\`\`
https://seu-projeto.vercel.app/vagas-completas
\`\`\`

**Configure no seu checkout:**
- **Link de Retorno (após pagamento):** `/acesso-liberado`
- **Link do Produto (entregável):** `/vagas-completas`

## 5. Como Publicar no Vercel (Grátis)

1. No v0, clique em "Publish" (canto superior direito)
2. Conecte com GitHub
3. Deploy automático no Vercel
4. Seu link será: `https://seu-projeto.vercel.app`

## 6. Estrutura de URLs Final

- Landing Page: `https://seu-projeto.vercel.app/`
- Quiz: `https://seu-projeto.vercel.app/quiz`
- Vagas Demo: `https://seu-projeto.vercel.app/jobs`
- Checkout Externo: (seu gateway)
- Confirmação: `https://seu-projeto.vercel.app/acesso-liberado`
- Entregável: `https://seu-projeto.vercel.app/vagas-completas`

## 7. Testando o Fluxo

1. Acesse a landing page
2. Clique em "Quero Me Candidatar"
3. Faça o cadastro
4. Complete o quiz
5. Veja as vagas e agende uma entrevista
6. Tente clicar em outra vaga
7. Modal premium aparece
8. Clique em "Ativar Acesso Premium"
9. Será redirecionado para SEU checkout
10. Após pagamento, retorna para `/acesso-liberado`
11. Clica em "Acessar Minhas Vagas"
12. Vê as 41 plataformas desbloqueadas

## 8. Importante

- Este projeto NÃO funciona na Hostinger como HTML estático
- Use Vercel (grátis) ou outro host que suporte Next.js
- O Vercel é a opção mais simples e recomendada
