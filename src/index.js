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
  