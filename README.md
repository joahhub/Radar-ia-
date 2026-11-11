# RADAR IA — versão inicial

Interface demonstrativa de uma central de ferramentas de inteligência artificial, prompts, tutoriais e ideias de conteúdo.

## Como executar localmente
1. Baixe ou extraia os arquivos.
2. Abra `index.html` no navegador.

Não há dependências ou etapa de compilação.

## Publicar no GitHub e Vercel
1. Crie um repositório no GitHub chamado `radar-ia`.
2. Envie os quatro arquivos (`index.html`, `styles.css`, `app.js`, `README.md`) para a raiz do repositório.
3. No Vercel, escolha **Add New → Project** e importe o repositório.
4. Como é um site estático, não precisa configurar framework nem comando de build. Deixe o diretório raiz como `./` e publique.

## O que já funciona
- Navegação entre seções.
- Layout responsivo para celular e computador.
- Catálogo demonstrativo com pesquisa e filtro.
- Biblioteca demonstrativa de prompts com botão de copiar.
- Gerador local de modelos de conteúdo (não usa uma API de IA).
- Seções de tutoriais e novidades demonstrativas.
- Links externos para os sites oficiais das ferramentas listadas.

## Limitações importantes desta versão
Esta é a primeira interface/MVP estático. Ainda **não** possui:
- Login real ou cadastro de usuários.
- Banco de dados.
- Painel administrativo persistente.
- Controle de assinaturas ou integração com Kiwify.
- Geração de conteúdo por IA conectada a um modelo.
- Atualização automática das ferramentas e notícias.

Os dados de exemplo estão em `app.js`. Não apresente as novidades de demonstração como notícias atuais. Antes de vender assinaturas, implemente autenticação, banco de dados, permissões e integração segura com a Kiwify (incluindo validação de webhooks no servidor).
