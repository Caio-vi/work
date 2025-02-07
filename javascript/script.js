var texto = false;
var ctt = false;
var sobre;

function sbr_prt() {
    // Verifica se já existe uma textarea e a remove se ctt for verdadeiro
    if (texto == true && ctt == true) {
        let sobre = document.querySelector('.sbr_sty');
        if (sobre) {
            document.body.removeChild(sobre);
            texto = false;
        }
    }

    if (texto == false) {
        if (ctt == true) {
            let contato = document.querySelector('.btn_spc');
            if (contato) {
                document.body.removeChild(contato);
                ctt = false;
            }
        }

        sobre = document.createElement("TextArea");
        sobre.value = " Olá fica tranquilo, Psicoterapia é pra todos!!  E visa  cuidar de você, como um ser humano único e não somente seu diagnóstico. Vamos construir uma caminhada juntos?   Na vida passamos por situações, traumas e momentos difíceis com os quais não precisamos lidar sozinhos." +
                      "A psicoterapia consiste em compreender as causas de seu sofrimento e encontrar formas para superá-lo." +
                      "Você é o caminho e é capaz de construir e reconstruir caminhos, corres e rios inteiros, eu posso te ajudar nessa construção. Quer saber um pouco mais sobre como podemos caminhar? Agende um horário ou mande uma mensagem! Venha conversar, vamos juntos construir uma caminhada de equilíbrio emocional e autoconhecimento!"+
                      " Tenho experiencia no tratamento:"+
                       " Depressão,  " +
                       " Fobias,"+
                       " Ansiedade,"+
                       " Transtornos relacionados ao estresse, "+
                       " Problemas de casal e de família, "+
                       " Dificuldades nos relacionamentos interpessoais, "+
                       " Doença crônica (psicossomática) (fibromialgia, doença autoimune...)  "+
                       " Problemas e conflitos profissionais. " ;
        sobre.style.textAlign = "center";               
        sobre.disabled = true;
        sobre.classList.add("sbr_sty");
        document.body.appendChild(sobre);
        texto = true;
    }
}

function ctt_prt() {
    // Verifica se já existe um contato e o remove se texto for verdadeiro
    if (ctt == false) {
        if (texto == true) {
            let sobre = document.querySelector('.sbr_sty');
            if (sobre) {
                document.body.removeChild(sobre);
                texto = false;
            }
        }

        const contato = document.createElement("div");
        contato.classList.add("btn_spc");

        const inst = document.createElement("img");
        inst.src = "imagens/instagram.jpg";
        inst.classList.add("inst");
        const inst_lk = document.createElement("a");
        inst_lk.href = "https://www.instagram.com/psicologamonicafreitas/";
        inst_lk.target = "_blank";
        inst_lk.title = "Instagram";
        inst_lk.appendChild(inst);
        contato.appendChild(inst_lk);

        const what = document.createElement("img");
        what.src = "imagens/whatsapp.png";
        what.classList.add("what");
        const what_lk = document.createElement("a");
        what_lk.href = "https://wa.me/+5521991586982";
        what_lk.target = "_blank";
        what_lk.title = "WhatsApp";
        what_lk.appendChild(what);
        contato.appendChild(what_lk);

        const viva = document.createElement("img");
        viva.src = "imagens/psicologiaviva.jpg";
        viva.classList.add("psic");
        const viva_lks = document.createElement("a");
        viva_lks.href = "https://perfil.psicologiaviva.com.br/psicologamonicavieira";
        viva_lks.target = "_blank";
        viva_lks.title = "psicologia_viva";
        viva_lks.appendChild(viva);
        contato.appendChild(viva_lks);

        document.body.appendChild(contato);
        ctt = true;
    }
}
 




 