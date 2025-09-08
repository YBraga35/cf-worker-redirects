export default {
  async fetch(request) {
    const url = new URL(request.url)
    const hostname = url.hostname
    const path = url.pathname

    // Redirecionamentos de divulgacao.yanbraga.com
    if (hostname === "divulgacao.yanbraga.com") {
      switch (path) {
        case '/tabela-de-precos':
          return Response.redirect('https://yan-braga.notion.site/Tabela-de-Pre-os-1cbf36a87c3b802ba36fefc29ba1b5d9?pvs=4', 301)

        case '/whatsapp':
          return Response.redirect('https://wa.me/5551991866752?text=Ol%C3%A1!%20Vim%20para%20a%20campanha', 301)

        case '/discord':
            return Response.redirect('https://discord.gg/eDYGg4uVDW', 301)
  
      case '/esperanca-no-deserto':
        return Response.redirect('https://yan-braga.notion.site/Divuga-o-Esperan-a-no-Deserto-1cbf36a87c3b803cb135e9b1b314e7c4?pvs=4', 301)
      case '/esperanca-no-deserto/whatsapp':
          return Response.redirect('https://wa.me/5551991866752?text=Ol%C3%A1!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20quinta-feira', 301)

        case '/ecos-da-guerra':
          return Response.redirect('https://yan-braga.notion.site/Divulga-o-Ecos-na-Guerra-Rubra-1d5f36a87c3b80769ee9e428477ee872?pvs=4', 301)

        case '/ecos-da-guerra/whatsapp':
          return Response.redirect('https://wa.me/5551991866752?text=Ol%C3%A1!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20sexta-feira', 301)

        case '/descendo-ao-avernus':
          return Response.redirect('https://yan-braga.notion.site/Divulga-o-Descendo-ao-Avernus-1d5f36a87c3b80a4aa0cc525ebbd6c42?pvs=4', 301)

        case '/descendo-ao-avernus/whatsapp':
          return Response.redirect('https://wa.me/5551991866752?text=Ol%C3%A1!%20Vim%20para%20a%20vaga%20da%20campanha%20de%20domingo', 301)
      }
    }

    // Redirecionamentos de drive.yanbraga.com
    if (hostname === "drive.yanbraga.com") {
      switch (path) {
        case '/aol':
          return Response.redirect('https://drive.google.com/file/d/15UziOGn6TIQ_XFbNxo5yuPg7I63iq53U/view?usp=sharing', 301)
        
        case '/ubg':
          return Response.redirect('https://drive.google.com/file/d/1QnZ8RK5dA1iddipEFRn6zQBNd6BY9dZd/view?usp=sharing', 301)

        case '/vss':
          return Response.redirect('https://drive.google.com/file/d/19ZAGIm3BtbGL5Gcs_6qKkT7500HeCes5/view?usp=sharing', 301)


        case '/':
          return Response.redirect('https://drive.google.com/drive/folders/1CXuUmmXZIyNH0gBfwv3NJtpo53Dcc3LW', 301)
      }
    }

    // Se não encontrou
    return new Response('Página não encontrada.', { status: 404 })
  }
}
