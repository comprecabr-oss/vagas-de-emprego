# Instruções para Upload do HTML na Hostinger

## 1. Como fazer upload

1. Acesse o painel da Hostinger
2. Vá em "Gerenciador de Arquivos" ou "File Manager"
3. Navegue até a pasta `public_html`
4. Faça upload do arquivo `index.html`
5. Seu site estará disponível em: `https://seudominio.com`

## 2. Configuração do Redirecionamento

No arquivo `index.html`, linha 389, você precisa substituir a URL:

\`\`\`javascript
function redirectToQuiz() {
    // SUBSTITUA ESTA URL PELA URL DO SEU QUIZ/CHECKOUT
    window.location.href = 'https://seu-checkout.com/quiz';
}
\`\`\`

**Substitua por:**
- Se você tem um checkout externo: `window.location.href = 'https://seu-checkout.com';`
- Se você quer redirecionar para outra página: `window.location.href = 'https://seudominio.com/quiz.html';`

## 3. Link do Entregável para seu Checkout

Após o pagamento ser confirmado no seu gateway, configure o redirecionamento para:

\`\`\`
https://seudominio.com/vagas-completas.html
\`\`\`

Você precisará criar também o arquivo `vagas-completas.html` com as 41 plataformas de vagas.

## 4. Estrutura de Arquivos Recomendada

\`\`\`
public_html/
├── index.html (landing page)
├── quiz.html (se você quiser hospedar o quiz também)
└── vagas-completas.html (página de entrega após pagamento)
\`\`\`

## 5. Importante

Este HTML é uma versão simplificada. Para funcionalidades completas (quiz interativo, tracking, etc.), recomendo fortemente usar o Vercel:

1. Clique em "Publish" no v0
2. Conecte com GitHub
3. Deploy automático e gratuito
4. URL profissional: `https://seu-projeto.vercel.app`

## 6. Dados Capturados

O formulário de registro salva:
- Nome do usuário
- Email do usuário

Esses dados ficam no `localStorage` do navegador. Para enviar para seu banco de dados, você precisa adicionar uma chamada de API na função `handleRegistration()`.
