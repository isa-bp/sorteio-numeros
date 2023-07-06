let numeros = [];

function adicionarNumero() {
    const numeroInput = document.getElementById("numero-input");
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    adicionarNumeroLista(numero);
    numeroInput.value = "";
}

function adicionarNumeroLista(numero) {
    numeros.push(numero);
    exibirNumeros();
    habilitarSorteio();
}

function exibirNumeros() {
    const numerosDiv = document.getElementById("numeros");
    numerosDiv.innerHTML = "» " + numeros.join(" · ") + " «";
}

function habilitarSorteio() {
    const sorteioBtn = document.getElementById("sorteio-btn");
    sorteioBtn.disabled = numeros.length === 0;
    document.getElementById("novo-sorteio-btn").disabled = true;
}

function realizarSorteio() {
    const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
    document.getElementById("result").textContent = "Resultado: " + numeroSorteado;
    document.getElementById("novo-sorteio-btn").disabled = false;
}

function novoSorteio() {
    numeros = [];
    exibirNumeros();
    document.getElementById("result").textContent = "";
    document.getElementById("novo-sorteio-btn").disabled = true;
    document.getElementById("sorteio-btn").disabled = true;
}

// Adicionando evento para a tecla "Enter"
const numeroInput = document.getElementById("numero-input");
numeroInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarNumero();
    }
});
