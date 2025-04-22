# 📦 Cloudflare Worker: Redirecionador de Links Personalizados

![Cloudflare Worker](https://img.shields.io/badge/Cloudflare-Worker-orange?logo=cloudflare)
![Deploy automático](https://img.shields.io/badge/Deploy-Automático-brightgreen)
![Status](https://img.shields.io/badge/Status-Ativo-success)

Este projeto utiliza [Cloudflare Workers](https://developers.cloudflare.com/workers/) para criar redirecionamentos personalizados em dois subdomínios:

- `divulgacao.yanbraga.com`
- `drive.yanbraga.com`

---

## 🚀 Funcionalidades

O worker redireciona requisições HTTP com base no subdomínio e no caminho (`pathname`) acessado. Ele suporta dois conjuntos de redirecionamento:

---

### 🌐 Subdomínio: `divulgacao.yanbraga.com`

Redirecionamentos para páginas de campanhas e contato via WhatsApp:

| Caminho                          | Destino                                                                                             |
|----------------------------------|------------------------------------------------------------------------------------------------------|
| `/tabela-de-precos`             | Página com tabela de preços no Notion                                                               |
| `/whatsapp`                     | Link genérico para contato via WhatsApp                                                             |
| `/esperanca-no-deserto`        | Página da campanha "Esperança no Deserto"                                                           |
| `/esperanca-no-deserto/whatsapp` | WhatsApp para vaga na campanha de quinta-feira                                                      |
| `/ecos-da-guerra`              | Página da campanha "Ecos da Guerra Rubra"                                                           |
| `/ecos-da-guerra/whatsapp`     | WhatsApp para vaga na campanha de sexta-feira                                                       |
| `/descendo-ao-avernus`         | Página da campanha "Descendo ao Avernus"                                                            |
| `/descendo-ao-avernus/whatsapp` | WhatsApp para vaga na campanha de domingo                                                           |

---

### 📁 Subdomínio: `drive.yanbraga.com`

Redirecionamentos para arquivos hospedados no OneDrive:

| Caminho                                 | Descrição                                |
|-----------------------------------------|-------------------------------------------|
| `/ubg/ultimate-backstory-guide`         | Livro *Ultimate Backstory Guide*          |
| `/vss/valdas-spire-of-secrets`          | Livro *Valda’s Spire of Secrets*          |
| `/tgs/the-griffons-saddlebag`           | Livro *The Griffon’s Saddlebag*           |
| `/main`                                 | Pasta principal com diversos conteúdos    |

---

## 📂 Estrutura do Projeto

```
cf-workers-redirects/
├── src/
│   └── index.js         # Código principal do worker
├── wrangler.toml        # Configuração do projeto para o Wrangler
└── README.md            # Este arquivo de documentação
```

---

## 🛠️ Como usar

### ✅ Pré-requisitos

- [Node.js](https://nodejs.org) instalado
- Conta na [Cloudflare](https://dash.cloudflare.com)
- `wrangler` instalado globalmente:

```bash
npm install -g wrangler
```

---

### 🚧 Teste local

Você pode rodar o worker localmente com:

```bash
wrangler dev
```

O servidor local simula o ambiente da Cloudflare para facilitar testes rápidos. Você pode acessar `http://localhost:8787/caminho-exemplo`.

---

### 🚀 Deploy para produção

Basta executar:

```bash
npx wrangler deploy
```

Certifique-se de que os subdomínios estejam apontando corretamente para o worker no painel da Cloudflare.

---

## ➕ Adicionando novos redirecionamentos

Edite o arquivo `src/index.js`, localize o `switch` referente ao subdomínio desejado (`divulgacao` ou `drive`) e adicione um novo `case` com o `pathname` desejado e a URL de destino.

Exemplo:

```js
case '/novo-caminho':
  return Response.redirect('https://sua-url.com/algum-conteudo', 301)
```

---

## 📌 Observação

Redirecionamentos utilizam status `301 - Moved Permanently`, o que pode ser cacheado pelos navegadores. Use com cuidado em URLs em constante mudança.

---

Feito com 💻 e 🎲 por [Yan Braga](https://yanbraga.com)
