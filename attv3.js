const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let salarioBruto, adicionalNoturno, horaExtra, descontos;

rl.question("Digite o valor do salário: ", (salarioBrutoInput) => {
    salarioBruto = parseFloat(salarioBrutoInput); 

    rl.question("Digite o valor do abono (adicional noturno): ", (adicionalNoturnoInput) => {
        adicionalNoturno = parseFloat(adicionalNoturnoInput); 

        rl.question("Digite o valor das horas extras: ", (horaExtraInput) => {
            horaExtra = parseFloat(horaExtraInput); 

            rl.question("Digite o valor dos descontos: ", (descontosInput) => {
                descontos = parseFloat(descontosInput); 

                
                let salarioLiquido = salarioBruto + adicionalNoturno + horaExtra - descontos;

                
                console.log("Salário Líquido:", new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                }).format(salarioLiquido));

                process.exit(0);
            });
        });
    });
});
