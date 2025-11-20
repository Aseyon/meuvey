function sortear() {
    let quant = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('tá de sacanagem né');
        reiniciar();
        ligarBotao();
    } else if (quant > (ate - de + 1)) {
        alert('safada');
        reiniciar();
        ligarBotao();
    } else {
        let sorteados = [];
        let numero;

        for (let i = 0; i < quant; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            sorteados.push(numero);
        }

        ligarBotao();

        document.getElementById('resultado').innerHTML =
          `<label>Numerus roubados: ${sorteados}</label>`;
    }
}

function ligarBotao() {
    let butao = document.getElementById('btn-reiniciar');

    if (butao.classList.contains('container__botao-desabilitado')) {
        butao.classList.remove('container__botao-desabilitado');
        butao.classList.add('container__botao');
    } else {
        butao.classList.remove('container__botao');
        butao.classList.add('container__botao-desabilitado');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById("quantidade").value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    document.getElementById('resultado').innerHTML =
      `<label>numerus roubados: <span>nenhum até agora</span></label>`;

    ligarBotao();
}

/* ——— CALCULADORA ——— */

function add(value) {
    document.getElementById("display").value += value;
}

function resultado() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Erro";
    }
}
