# Como Adicionar Seu Vídeo

Você tem 3 opções para adicionar o vídeo na landing page:

## Opção 1: YouTube (Mais Fácil - Recomendado)

1. Faça upload do seu vídeo no YouTube
2. Clique em "Compartilhar" → "Incorporar"
3. Copie o código do iframe
4. No arquivo `components/institutional-landing.tsx`, linha ~150:
   - Comente o bloco `<video controls>`
   - Descomente o bloco `<iframe>` do YouTube
   - Substitua `SEU_VIDEO_ID` pelo ID do seu vídeo

**Exemplo:**
\`\`\`tsx
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Vídeo explicativo"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
\`\`\`

## Opção 2: Vimeo

1. Faça upload no Vimeo
2. Pegue o link de embed
3. Use o mesmo processo do YouTube

## Opção 3: Link Direto (Google Drive, Dropbox, Bunny CDN)

1. Hospede seu vídeo MP4 em um serviço de hospedagem
2. Pegue o link direto do arquivo
3. No arquivo `components/institutional-landing.tsx`:
   - Descomente o bloco "Opção 3"
   - Substitua a URL pelo seu link

**Exemplo:**
\`\`\`tsx
<video controls className="w-full h-full">
  <source src="https://drive.google.com/uc?export=download&id=SEU_ID" type="video/mp4" />
</video>
\`\`\`

## Opção 4: Após Deploy no Vercel (Para vídeos locais)

1. Faça o deploy do projeto no Vercel
2. Acesse o painel do Vercel
3. Vá em "Storage" → "Blob"
4. Faça upload do vídeo
5. Copie a URL gerada
6. Use a URL no código

## Formatos Aceitos

- **MP4** (H.264) - Mais compatível ✅
- **WebM** (VP8/VP9) - Boa compressão
- **OGG** (Theora) - Open source

**Recomendação:** Use MP4 para máxima compatibilidade.

## Tamanho Recomendado

- Resolução: 1920x1080 (Full HD) ou 1280x720 (HD)
- Duração: 1-3 minutos ideal
- Tamanho: Até 50MB para melhor performance
