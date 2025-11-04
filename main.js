const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Como você controla os gastos mensais?",
        alternativas: [
            {
                texto: "Aplicativos de controle financeiro (planilhas digitais, apps de orçamento).",
                afirmacao: "Você acredita que registrar tudo em tempo real ajuda a manter as contas sob controle e evitar surpresas no fim do mês.",
            },
            {
                texto: "Anotações à mão em um caderno ou agenda física.",
                afirmacao: "Você prefere o método tradicional porque sente que escrever reforça a consciência dos gastos.",
            }
        ]
    },
    {
        enunciado: "Quando recebe um dinheiro extra (salário bônus, devolução), qual é sua primeira atitude?",
        alternativas: [
            {
                texto: " Guardar parte para uma reserva de emergência ou objetivo futuro.",
                afirmacao: "Você vê esse recurso como uma oportunidade de fortalecer sua segurança financeira.",
            },
            {
                texto: "Usar imediatamente para pagar dívidas ou realizar algum desejo imediato.",
                afirmacao: "Você prefere aplicar o valor onde ele trará alívio imediato ou satisfação pessoal.",
            }
        ]
    },
    {
        enunciado: "Como você costuma decidir quanto vai poupar a cada mês?",
        alternativas: [
            {
                texto: "Definir um percentual fixo da renda (ex.: 15 % do salário).",
                afirmacao: "Você acredita que reservar uma porcentagem constante facilita o controle e cria o hábito de economizar.",
            },
            {
                texto: "Avaliar as despesas do mês e poupar o que sobrar depois de pagar tudo.",
                afirmacao: "Você prefere adaptar a poupança à realidade de cada período, ajustando‑se às variações de gasto.",
            }
        ]
    },
    {
        enunciado: "Quando recebe um crédito em cartão de loja, qual a sua postura?",
        alternativas: [
            {
                texto: "Pagar a fatura integralmente no vencimento para evitar juros.",
                afirmacao: "Você prioriza manter o custo do crédito zero, mesmo que isso signifique usar parte da reserva de emergência.",
            },
            {
                texto: "Aproveitar o parcelamento e pagar apenas o mínimo, usando o dinheiro para outras necessidades imediatas.",
                afirmacao: "Você valoriza a flexibilidade de fluxo de caixa, aceitando pagar juros futuros para resolver prioridades atuais.",
            }
        ]
    },
    {
        enunciado: "Qual estratégia você usa para controlar gastos supérfluos?",
        alternativas: [
            {
                texto: "Criar “limites de despesa” por categoria (lazer, delivery, roupas) em um aplicativo de orçamento.",
                afirmacao: "Você sente que limites pré‑definidos evitam surpresas e mantêm o orçamento equilibrado.",
            },
            {
                texto: "Esperar 24 horas antes de fazer uma compra não planejada e reavaliar a real necessidade.",
                afirmacao: "Você acredita que o intervalo de tempo reduz compras impulsivas e ajuda a refletir sobre prioridades.",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

if (atual >= perguntas.length){
    mostraResultado();
    return;
}

    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível manter suas contas sob controle, o resultado final poderá valer a pena?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();



