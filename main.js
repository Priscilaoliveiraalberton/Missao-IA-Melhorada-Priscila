const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        "enunciado": "Como você controla os gastos mensais?",
        "alternativas": [
            {
                "texto": "Aplicativos de controle financeiro (planilhas digitais, apps de orçamento).",
                "afirmacao": [
                    "Você acredita que registrar tudo em tempo real ajuda a manter as contas sob controle e evitar surpresas no fim do mês.",
                    "Você acha que a tecnologia facilita a visualização dos gastos e oferece relatórios que ajudam a planejar melhor o orçamento.",
                    "Você considera que a praticidade de acompanhar o fluxo de caixa pelo celular é uma vantagem significativa."
                ]
            },
            {
                "texto": "Anotações à mão em um caderno ou agenda física.",
                "afirmacao": [
                    "Você prefere o método tradicional porque sente que escrever reforça a consciência dos gastos.",
                    "Você acredita que o ato físico de escrever ajuda a se concentrar mais nas finanças pessoais.",
                    "Você valoriza a sensação de controle e planejamento que vem ao anotar manualmente cada despesa."
                ]
            }
        ]
    },
    {
        "enunciado": "Quando recebe um dinheiro extra (salário bônus, devolução), qual é sua primeira atitude?",
        "alternativas": [
            {
                "texto": "Guardar parte para uma reserva de emergência ou objetivo futuro.",
                "afirmacao": [
                    "Você vê esse recurso como uma oportunidade de fortalecer sua segurança financeira.",
                    "Você acredita que manter uma reserva é essencial para garantir tranquilidade em momentos imprevistos.",
                    "Você pensa no longo prazo e prefere destinar o dinheiro extra para um fundo de emergência ou investimento."
                ]
            },
            {
                "texto": "Usar imediatamente para pagar dívidas ou realizar algum desejo imediato.",
                "afirmacao": [
                    "Você prefere aplicar o valor onde ele trará alívio imediato ou satisfação pessoal.",
                    "Você acredita que quitar dívidas ou satisfazer desejos instantâneos traz uma sensação de alívio.",
                    "Você considera mais importante aproveitar oportunidades imediatas do que economizar para o futuro."
                ]
            }
        ]
    },
    {
        "enunciado": "Como você costuma decidir quanto vai poupar a cada mês?",
        "alternativas": [
            {
                "texto": "Definir um percentual fixo da renda (ex.: 15 % do salário).",
                "afirmacao": [
                    "Você acredita que reservar uma porcentagem constante facilita o controle e cria o hábito de economizar.",
                    "Você acha que definir uma quantia fixa dá mais previsibilidade e ajuda a manter o foco no objetivo de poupança.",
                    "Você entende que a consistência no valor poupado, independentemente da variação da receita, é crucial."
                ]
            },
            {
                "texto": "Avaliar as despesas do mês e poupar o que sobrar depois de pagar tudo.",
                "afirmacao": [
                    "Você prefere adaptar a poupança à realidade de cada período, ajustando‑se às variações de gasto.",
                    "Você sente que, ao considerar as despesas do mês, fica mais fácil decidir o valor que pode ser poupado.",
                    "Você acha que, ao focar no saldo disponível após os gastos, se torna mais flexível em relação à economia."
                ]
            }
        ]
    },
    {
        "enunciado": "Quando recebe um crédito em cartão de loja, qual a sua postura?",
        "alternativas": [
            {
                "texto": "Pagar a fatura integralmente no vencimento para evitar juros.",
                "afirmacao": [
                    "Você prioriza manter o custo do crédito zero, mesmo que isso signifique usar parte da reserva de emergência.",
                    "Você valoriza a importância de evitar o acúmulo de dívidas e prefere pagar tudo de uma vez.",
                    "Você acredita que evitar os juros é fundamental para manter o equilíbrio financeiro."
                ]
            },
            {
                "texto": "Aproveitar o parcelamento e pagar apenas o mínimo, usando o dinheiro para outras necessidades imediatas.",
                "afirmacao": [
                    "Você valoriza a flexibilidade de fluxo de caixa, aceitando pagar juros futuros para resolver prioridades atuais.",
                    "Você acredita que parcelar é uma forma de aliviar a pressão financeira no curto prazo, mesmo que envolva custos adicionais.",
                    "Você prefere utilizar o crédito de maneira a atender necessidades imediatas e, ao mesmo tempo, manter o pagamento das parcelas sob controle."
                ]
            }
        ]
    },
    {
        "enunciado": "Qual estratégia você usa para controlar gastos supérfluos?",
        "alternativas": [
            {
                "texto": "Criar “limites de despesa” por categoria (lazer, delivery, roupas) em um aplicativo de orçamento.",
                "afirmacao": [
                    "Você sente que limites pré‑definidos evitam surpresas e mantêm o orçamento equilibrado.",
                    "Você acredita que o controle por categorias ajuda a visualizar onde pode cortar gastos sem comprometer necessidades essenciais.",
                    "Você valoriza a clareza de saber exatamente quanto pode gastar em cada área."
                ]
            },
            {
                "texto": "Esperar 24 horas antes de fazer uma compra não planejada e reavaliar a real necessidade.",
                "afirmacao": [
                    "Você acredita que o intervalo de tempo reduz compras impulsivas e ajuda a refletir sobre prioridades.",
                    "Você vê o prazo de 24 horas como uma forma de evitar decisões precipitadas e repensar se realmente precisa daquele item.",
                    "Você adota a ideia de dar um tempo para pensar, para garantir que as compras sejam mais conscientes."
                ]
            }
        ]
    }


];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se fosse possível manter suas contas sob controle, o resultado final poderá valer a pena?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();



