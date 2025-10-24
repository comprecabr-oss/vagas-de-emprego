# Configuração do Gateway de Pagamento

## URL de Redirecionamento Após Pagamento

Configure seu gateway de pagamento (LiraPay) para redirecionar o cliente após pagamento aprovado para:

\`\`\`
https://vagasdeemprego.store/premium
\`\`\`

Ou se estiver testando no Vercel:

\`\`\`
https://seu-projeto.vercel.app/premium
\`\`\`

## Como Funciona

1. **Cliente clica no modal premium** → Redireciona para checkout do LiraPay
2. **Cliente completa o pagamento** → Gateway processa pagamento
3. **Pagamento aprovado** → Gateway redireciona para `/premium`
4. **Cliente acessa página premium** → Vê todas as 41 plataformas desbloqueadas

## Configuração no LiraPay

No painel do LiraPay, configure:

- **URL de Sucesso**: `https://vagasdeemprego.store/premium`
- **URL de Cancelamento**: `https://vagasdeemprego.store/` (volta para landing page)
- **URL de Notificação (Webhook)**: Opcional, se quiser rastrear pagamentos

## Estrutura de Arquivos para Hostinger

Quando fizer deploy na Hostinger:

1. Faça build do projeto Next.js
2. Exporte os arquivos estáticos
3. Faça upload para `public_html/` na Hostinger
4. A estrutura ficará:
   - `public_html/index.html` → Landing page
   - `public_html/premium/index.html` → Página de entregável

## Testando o Fluxo

1. Acesse a landing page
2. Clique em "Ver Vagas Para Mim"
3. Complete o registro e quiz
4. Clique em uma segunda vaga para ver o modal premium
5. Clique em "Ativar Acesso Premium Agora"
6. Complete o pagamento no LiraPay
7. Após aprovação, será redirecionado para `/premium`
8. Verá todas as 41 plataformas desbloqueadas

## Importante

- A página `/premium` automaticamente marca o acesso premium como ativo no localStorage
- Não é necessário autenticação adicional - o simples acesso à página `/premium` já libera o conteúdo
- Todos os links das plataformas abrem em nova aba para não perder o acesso
