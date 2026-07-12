 document.addEventListener('DOMContentLoaded', function () {

    // ========== BOTÕES DE NAVEGAÇÃO ==========

    const abordagemButton = document.getElementById('abordagem');
    if (abordagemButton) {
        abordagemButton.addEventListener('click', () => {
            window.location.href = 'abordagem.html';
        });
    }

    const inicialButton = document.getElementById('inicial');
    if (inicialButton) {
        inicialButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const tratamentosButton = document.getElementById('tratamentos');
    if (tratamentosButton) {
        tratamentosButton.addEventListener('click', () => {
            window.location.href = 'tratamentos.html';
        });
    }


    if (window.location.href.includes('abordagem.html')) {
        const elemento = document.getElementById('minha_abordagem');
        if (elemento) {
            window.scrollTo({
                top: elemento.offsetTop,
                behavior: 'smooth'
            });
        }
    }


    


}); // ← FECHA O DOMContentLoaded
