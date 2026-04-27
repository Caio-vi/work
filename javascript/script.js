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


    const Api_Url = 'https://strapi-backend-ufky.onrender.com/api/about?populate[Site][populate]=*';

    fetch(Api_Url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const SiteData = data.data.Site[0];
            console.log('Nome do Site:', SiteData.Nome_do_Site);
            console.log('Texto:', SiteData.texto_principal);
            console.log(SiteData.Logo);

            const Nome_do_Site = SiteData.Nome_do_Site;
            document.getElementById('Nome_do_Site').textContent = Nome_do_Site;

            //////////////////////
            let urlrelativa = SiteData.Logo.url;
            let urlCompleta = 'https://strapi-backend-ufky.onrender.com' + urlrelativa;
            document.getElementById('Logo').src = urlCompleta;


            //////////////////////
            urlrelativa = SiteData.imagem_de_fundo.url;
            urlCompleta = 'https://strapi-backend-ufky.onrender.com' + urlrelativa;

            document.getElementById('imagem_de_fundo').style.backgroundImage = `url(${urlCompleta})`;
            //////////////////////

            const botoes = SiteData.botoes;
            const Elementosbotoes = document.querySelectorAll('#botoes button');
            console.log('Botoes:', botoes);
            botoes.forEach((botao, index) => {

                if (Elementosbotoes[index]) {
                    Elementosbotoes[index].textContent = botao.nome_do_botao;

                }
            });

            //////////////////////

            let textodeacolhimento = SiteData.texto_de_acolhimento;
            document.getElementById('texto_de_acolhimento').textContent = textodeacolhimento;

            //////////////////////             


            const textoMenor = SiteData.texto_de_acolhimento_menor;
            document.getElementById('textoMenor').textContent = textoMenor;

            //////////////////////  

            switch (window.location.pathname) {
                case '/index.html':
                    const elementotexto = document.getElementById('texto_principal');
                    elementotexto.innerHTML = '';
                    for (let i = 0; i < SiteData.texto_principal.length; i++) {
                        const novaFrase = SiteData.texto_principal[i].children[0].text;

                        const formatacao = document.createElement('li');
                        formatacao.classList.add('texto');
                        elementotexto.appendChild(formatacao);
                        formatacao.textContent += ' ' + novaFrase;

                        if (i === 0) {
                            formatacao.classList.add('titulo');
                        } else {
                            formatacao.classList.add('texto');
                        }
                        urlrelativa = SiteData.foto_lateral.url;
                        urlCompleta = 'https://strapi-backend-ufky.onrender.com' + urlrelativa;
                        document.getElementById('foto_lateral').src = urlCompleta;

                        console.log('', urlrelativa = SiteData.foto_lateral.url);

                        console.log('', urlCompleta = 'https://strapi-backend-ufky.onrender.com' + urlrelativa);
                    }

                    break;

                case '/abordagem.html': {
                    const abordagemtexto = document.getElementById('minha_abordagem');
                    abordagemtexto.innerHTML = '';

                    console.log("abordagemtexto", abordagemtexto);

                    for (let i = 0; i < SiteData.Abordagem.length; i++) {
                        const novaFrase = SiteData.Abordagem[i].children[0].text;
                        const formatacao = document.createElement('li');
                        formatacao.classList.add('texto');
                        abordagemtexto.appendChild(formatacao);
                        formatacao.textContent += ' ' + novaFrase;
                    }

                }

                    break;

                case '/tratamentos.html': {

                    const tratamentotexto = document.getElementById('descricao');
                    tratamentotexto.innerHTML = '';

                    for (let i = 0; i < SiteData.Tratamentos.length; i++) {
                        const tratamento = SiteData.Tratamentos[i];

                        // Título da doença
                        const titulo = document.createElement('h1');
                        titulo.textContent = tratamento.nome_da_doenca;
                        tratamentotexto.appendChild(titulo);

                        // Descrição
                        let textoDescricao = '';
                        if (tratamento.descricaco_de_como_vai_ser_tratada?.[0]?.children?.[0]?.text) {
                            textoDescricao = tratamento.descricaco_de_como_vai_ser_tratada[0].children[0].text;
                        }

                        const descricaoItem = document.createElement('li');
                        descricaoItem.classList.add('texto');
                        descricaoItem.textContent = textoDescricao;
                        tratamentotexto.appendChild(descricaoItem);
                    }

                }

                default: ("pagina inexistente")
            }





        })




        .catch(error => {
            console.error('Erro ao buscar dados:', error);
        });



}); // ← FECHA O DOMContentLoaded
