export default {
    async fetch(request) {
      const url = new URL(request.url)
  
      switch (url.pathname) {
        case '/descendo-ao-avernus':
          return Response.redirect('https://yan-braga.notion.site/Divulga-o-Descendo-ao-Avernus-1d5f36a87c3b80a4aa0cc525ebbd6c42?pvs=4', 301)
  
        case '/ecos-da-guerra':
          return Response.redirect('https://yan-braga.notion.site/Divulga-o-Ecos-na-Guerra-Rubra-1d5f36a87c3b80769ee9e428477ee872?pvs=4', 301)
  
        case '/esperanca-no-deserto':
          return Response.redirect('https://yan-braga.notion.site/Divuga-o-Esperan-a-no-Deserto-1cbf36a87c3b803cb135e9b1b314e7c4?pvs=4', 301)
  
        case '/tabela-de-precos':
          return Response.redirect('https://yan-braga.notion.site/Tabela-de-Pre-os-1cbf36a87c3b802ba36fefc29ba1b5d9?pvs=4', 301)

        default:
          return new Response('Página não encontrada.', { status: 404 })
      }
    }
  }
  