const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal= "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    if(opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado ();
        return;
    }
    mostraPergunta();
}

// function mostraResultado(){
//     caixaPerguntas.textContent = 'Em 2049, ${nome}';
//     textoResultado.textContent = historiaFinal;
//     caixaAlternativas.textContent = "A educação terá evoluído significativamente, moldada por avanços tecnológicos, mudanças sociais e novas abordagens pedagógicas. Este futuro educacional será profundamente integrado à tecnologia, mas também focado no desenvolvimento holístico dos estudantes. Sua escolha fará toda diferença, você pode ou não querer evoluir junto, mas, não podemos privar nosso futuro disso.";
//     caixaResultados.classList.add("mostrar");
//     botaoJogarNovamente.addEventListener("click", jogaNovamente);
// }

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener("click", jogaNovamente);
}

function jogaNovamente () {
    atual = 0;
    historiaFinal = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta ();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();
