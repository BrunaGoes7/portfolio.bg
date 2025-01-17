// Seleciona todos os itens da lista (ícones)
const menuItems = document.querySelectorAll('.navigation ul li');

// Adiciona um evento de clique a cada ícone
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Obtém o link do ícone clicado
        const link = item.querySelector('a').getAttribute('href');

        // Verifica se o link é válido
        if (link) {
            // Redireciona para o destino
            if (link.startsWith('http')) {
                // Links externos (como Instagram)
                window.open(link, '_blank'); // Abre em uma nova aba
            } else {
                // Links internos ou âncoras
                window.location.href = link; // Redireciona para a página/seção
            }
        }
    });
});
