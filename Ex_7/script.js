function calcularIdade() {
    const entrada = document.getElementById("dataNascimento").value;
    const resultado = document.getElementById("resultado");
    resultado.textContent = "";
    
    try {
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
        if (!regex.test(entrada)) {
            throw new Error("Formato Inválido. Use DD/MM/YYYY");
        }
        console.log(regex);

        const [dia, mes, ano] = entrada.split("/");
        console.log([dia, mes, ano]);

        const dataNasc = new Date(`${dia} - ${mes} - ${ano}`);
        if(isNaN(dataNasc.getTime())) {
            throw new Error("Data inválida!");
        }
        console.log(dataNasc);

        const hoje = new Date();
        if (dataNasc > hoje) {
            throw new Error("A data de nascimento não pode ser futura.");
        }
        console.log(hoje);

        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const m = hoje.getMonth() - dataNasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }
        console.log(idade);

        resultado.textContent = `Idade: ${idade} anos`;
    } catch (erro) {
        resultado.textContent = "Algo de errado aconteceu.";
    } console.log(resultado);
}