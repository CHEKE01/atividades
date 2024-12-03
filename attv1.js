const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor do salário: ", (salarioInput) => {
    let salario = parseFloat(salarioInput);

    console.log("Salário inicial:", new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(salario));

    rl.question("Digite o valor do abono: ", (abonoInput) => {
        let abono = parseFloat(abonoInput);

        console.log("Abono:", new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(abono));

        let salarioTotal = salario + abono;

        console.log("Salário Total:", new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(salarioTotal));

        process.exit(0);
    });
});
