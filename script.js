// Botão Saiba Mais
document.getElementById("btnSaibaMais").addEventListener("click", () => {
    alert(
        "O Agro Forte promove práticas sustentáveis que garantem produtividade agrícola e preservação ambiental."
    );
});

// Formulário
document.getElementById("formContato").addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Mensagem enviada com sucesso!");

    e.target.reset();
});