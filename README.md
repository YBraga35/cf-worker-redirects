Show! Dá sim pra usar um repositório do GitHub como origem pro seu Worker e manter os redirecionamentos lá — ótimo pra versionar ou atualizar fácil com Git.

Aqui vai o **passo a passo completo** para fazer isso:

---

### ✅ 1. Crie o repositório no GitHub

Se ainda não tem, crie um repositório novo chamado por exemplo `cf-workers-redirects`. Dentro dele, crie esta estrutura de arquivos:

```
cf-workers-redirects/
├── src/
│   └── index.js
├── wrangler.toml
└── README.md
```

---

### ✅ 2. Conteúdo do `index.js`

No arquivo `src/index.js`, coloque o script de redirecionamento:

```javascript
export default {
  async fetch(request) {
    const url = new URL(request.url)

    switch (url.pathname) {
      case '/descendo-ao-avernus':
        return Response.redirect('https://bit.ly/3G7Lns5', 301)

      case '/ecos-da-guerra':
        return Response.redirect('https://bit.ly/Ecos-Guerra-Rubra', 301)

      case '/esperanca-no-deserto':
        return Response.redirect('https://bit.ly/3EmVyZm', 301)

      default:
        return new Response('Página não encontrada.', { status: 404 })
    }
  }
}
```

---

### ✅ 3. Conteúdo do `wrangler.toml`

Esse arquivo configura o deploy:

```toml
name = "divulgacao-redirect"
main = "src/index.js"
compatibility_date = "2024-04-15"

# Opcional: define domínio customizado já aqui
routes = [
  { pattern = "divulgacao.yanbraga.com/*", zone_name = "yanbraga.com" }
]

# Troque para sua conta
account_id = "SEU_ACCOUNT_ID_DO_CLOUDFLARE"
```

Você encontra seu `account_id` na dashboard do Cloudflare, em **Workers & Pages > Settings > API**.

---

### ✅ 4. Conecte o GitHub ao Cloudflare

Agora vamos conectar esse repositório ao Worker:

1. Vá para **Cloudflare Dashboard > Workers & Pages**.

2. Clique em **"Create Application"** > selecione **"Workers"**.

3. Em vez de criar do zero, clique na aba **"GitHub"** e **conecte seu repositório**.

4. Escolha o branch (geralmente `main`) e clique em **"Set up builds and deployments"**.

5. O Cloudflare vai detectar o `wrangler.toml` e configurar automaticamente o build com Wrangler.

---

### ✅ 5. Configure o domínio personalizado

Depois do deploy:

1. Vá até a aba **"Triggers"** do Worker recém-publicado.

2. Adicione a rota personalizada:

```
divulgacao.yanbraga.com/*
```

3. No painel **DNS**, crie um registro A para `divulgacao` com IP `192.0.2.1`, e **mantenha o proxy (nuvem laranja) ativo**.

---

### ✅ 6. Feito! Agora você pode:

- Manter e atualizar seus redirecionamentos no GitHub com commits
- Adicionar novas rotas no `index.js` facilmente
- Ter versionamento e histórico de mudanças

---
