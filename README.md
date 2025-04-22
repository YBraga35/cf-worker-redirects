
# 🌐 Cloudflare Worker: Redirecionamentos Personalizados

Este projeto usa um **Cloudflare Worker** para criar redirecionamentos customizados usando subdomínios do domínio `yanbraga.com`. É ideal para divulgar campanhas de RPG, links de WhatsApp, documentos e arquivos de forma prática e centralizada.

---

## 📁 Estrutura

```
cf-worker-redirects/
├── src/
│   └── index.js        # Script principal com a lógica de redirecionamento
├── wrangler.toml       # Configuração do Worker e domínios
└── README.md           # Este arquivo
```

---

## 🚀 Funcionalidades

Atualmente o Worker realiza redirecionamentos para **dois subdomínios**:

### 🔸 `divulgacao.yanbraga.com`

Divulgação de campanhas de RPG e links úteis:

| Caminho                            | Destino (Notion ou WhatsApp) |
|-----------------------------------|-------------------------------|
| `/tabela-de-precos`               | Página de preços no Notion   |
| `/ecos-da-guerra`                 | Página da campanha Ecos      |
| `/ecos-da-guerra/whatsapp`        | Link direto para WhatsApp    |
| `/descendo-ao-avernus`            | Página da campanha Avernus   |
| `/descendo-ao-avernus/whatsapp`   | Link direto para WhatsApp    |
| `/esperanca-no-deserto`           | Página da campanha Esperança |
| `/esperanca-no-deserto/whatsapp`  | Link direto para WhatsApp    |
| `/whatsapp`                       | Link geral de WhatsApp       |

---

### 🔸 `drive.yanbraga.com`

Redireciona para arquivos hospedados na nuvem (ex: OneDrive):

| Caminho                                  | Destino (OneDrive)                                 |
|------------------------------------------|----------------------------------------------------|
| `/ubg/ultimate-backstory-guide`          | Guia de Criação de Backstory no OneDrive           |

---

## ⚙️ Configuração (wrangler.toml)

```toml
name = "cf-worker-redirects"
main = "src/index.js"
compatibility_date = "2024-04-15"

account_id = "SEU_ACCOUNT_ID"

routes = [
  { pattern = "divulgacao.yanbraga.com/*", zone_name = "yanbraga.com" },
  { pattern = "drive.yanbraga.com/*", zone_name = "yanbraga.com" }
]
```

> Substitua `SEU_ACCOUNT_ID` pelo ID da sua conta, encontrado na dashboard do Cloudflare.

---

## 🛠️ Como usar

1. Faça um fork/clonagem deste repositório.
2. Configure seu domínio e subdomínios no painel DNS da Cloudflare (tipo A apontando para `192.0.2.1` com proxy ativo).
3. Atualize seu `account_id` no `wrangler.toml`.
4. Faça deploy com:

```bash
npx wrangler deploy
```

---

## ✨ Sugestões Futuras

- Usar mapa JSON para centralizar os redirecionamentos
- Interface web para edição de rotas
- Logs de acesso para estatísticas

---

👨‍💻 Feito por [@YBraga35](https://github.com/YBraga35)
```
