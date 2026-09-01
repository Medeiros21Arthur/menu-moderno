const itensMenu = [
    { texto: 'Home', icone: 'fa-solid fa-house', link: 'index.html' },
    { texto: 'Sobre mim', icone: 'fa-solid fa-user', link: '#' },
    { texto: 'Contato', icone: 'fa-solid fa-envelope', link: 'contato.html' }
];

// Função que cria e insere o menu na página
function carregarMenu() {
    const menuTemplate = `
        <div class="botao">
            <i class="fa-solid fa-bars"></i>
        </div>
        <nav class="menu-lateral">
            <ul>
                ${itensMenu.map(item => `
                    <li>
                        <a href="${item.link}">
                            <i class="${item.icone}"></i> ${item.texto}
                        </a>
                    </li>
                `).join('')}
            </ul>
        </nav>
        <div class="background"></div>
    `;

    // Insere no início do body
    document.body.insertAdjacentHTML('afterbegin', menuTemplate);

    // Seleciona os elementos recém-criados
    const botao = document.querySelector('.botao');
    const menuLateral = document.querySelector('.menu-lateral');
    const background = document.querySelector('.background');
    const conteudo = document.querySelector('.conteudo');

    // Alternar abertura do menu
    function alternarMenu() {
        menuLateral.classList.toggle('aberto');
        background.classList.toggle('aberto');
        botao.classList.toggle('aberto');
        if (conteudo) {
            conteudo.classList.toggle('aberto');
        }
    }

    botao.addEventListener('click', alternarMenu);
    background.addEventListener('click', alternarMenu);
}

// Inicializa o menu quando o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', carregarMenu);
} else {
    carregarMenu();
}

// luz no card
const luz = document.querySelector('.luz');
const card = document.querySelector('.card');

window.addEventListener('mousemove', (e) => {
    const posicaoCard = card.getBoundingClientRect();
    const x = e.clientX - posicaoCard.left;
    const y = e.clientY - posicaoCard.top;

    // Se estiver dentro do card, mostra e centraliza exatamente no cursor
    if (x >= 0 && x <= posicaoCard.width && y >= 0 && y <= posicaoCard.height) {
        luz.style.opacity = 1;
        luz.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    } else {
        luz.style.opacity = 0;
    }
});