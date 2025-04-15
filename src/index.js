export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname

    const redirects = {
      '/descendo-ao-avernus': 'https://yan-braga.notion.site/Divulga-o-Descendo-ao-Avernus-1d5f36a87c3b80a4aa0cc525ebbd6c42?pvs=4',
      '/ecos-da-guerra': 'https://yan-braga.notion.site/Divulga-o-Ecos-na-Guerra-Rubra-1d5f36a87c3b80769ee9e428477ee872?pvs=4',
      '/esperanca-no-deserto': 'https://yan-braga.notion.site/Divuga-o-Esperan-a-no-Deserto-1cbf36a87c3b803cb135e9b1b314e7c4?pvs=4',
      '/tabela-de-precos': 'https://yan-braga.notion.site/Tabela-de-Pre-os-1cbf36a87c3b802ba36fefc29ba1b5d9?pvs=4',

      // WhatsApp redirects
      '/descendo-ao-avernus/whatsapp': 'https://wa.me/5551991866752?text=Ol%C3%A1%2C%20sou%20%5Bseu%20nome%5D!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20domingo',
      '/ecos-da-guerra/whatsapp': 'https://wa.me/5551991866752?text=Ol%C3%A1%2C%20sou%20%5Bseu%20nome%5D!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20sexta-feira',
      '/esperanca-no-deserto/whatsapp': 'https://wa.me/5551991866752?text=Ol%C3%A1%2C%20sou%20%5Bseu%20nome%5D!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20quinta-feira'
    }

    if (redirects[path]) {
      return Response.redirect(redirects[path], 301)
    }

    return new Response('Página não encontrada.', { status: 404 })
  }
}
