const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a atividade desejada\n1 - Atividade 01\n2 - Atividade 02\n3 - Atividade 03\n4 - Atividade 04\n", (attvInput) => {
    let attvSelecionada = parseInt(attvInput);

    if (attvSelecionada === 1) {
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

                rl.close();
            });
        });
    } else if (attvSelecionada === 2) {
        rl.question("Digite a nota 1: ", (n1Input) => {
            let n1 = parseFloat(n1Input);
            if (isNaN(n1)) {
                console.log("Valor inválido para a nota 1");
                rl.close();
            }

            rl.question("Digite a nota 2: ", (n2Input) => {
                let n2 = parseFloat(n2Input);
                if (isNaN(n2)) {
                    console.log("Valor inválido para a nota 2");
                    rl.close();          
                }

                rl.question("Digite a nota 3: ", (n3Input) => {
                    let n3 = parseFloat(n3Input);
                    if (isNaN(n3)) {
                        console.log("Valor inválido para a nota 3");
                        rl.close();
                    }

                    rl.question("Digite a nota 4: ", (n4Input) => {
                        let n4 = parseFloat(n4Input);
                        if (isNaN(n4)) {
                            console.log("Valor inválido para a nota 4");
                            rl.close();                   
                        }

                        let mediaFinal = (n1 + n2 + n3 + n4) / 4;
                        console.log("A média final é:", mediaFinal);
                        rl.close();
                    });
                });
            });
        });
    } else if (attvSelecionada === 3) {
        rl.question("Digite o valor do salário: ", (salarioBrutoInput) => {
            let salarioBruto = parseFloat(salarioBrutoInput); 

            rl.question("Digite o valor do abono (adicional noturno): ", (adicionalNoturnoInput) => {
                let adicionalNoturno = parseFloat(adicionalNoturnoInput); 

                rl.question("Digite o valor das horas extras: ", (horaExtraInput) => {
                    let horaExtra = parseFloat(horaExtraInput); 

                    rl.question("Digite o valor dos descontos: ", (descontosInput) => {
                        let descontos = parseFloat(descontosInput); 

                        let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra * 5) - descontos;

                        console.log("Salário Líquido:", new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        }).format(salarioLiquido));

                        rl.close();
                    });
                });
            });
        });
    } else if (attvSelecionada === 4) {
        rl.question("Digite a nota 1: ", (n1Input) => {
            let n1 = parseFloat(n1Input);
            if (isNaN(n1)) {
                console.log("Valor inválido");
                rl.close();
            }

            rl.question("Digite a nota 2: ", (n2Input) => {
                let n2 = parseFloat(n2Input);
                if (isNaN(n2)) {
                    console.log("Valor inválido");
                    rl.close();  
                }

                rl.question("Digite a nota 3: ", (n3Input) => {
                    let n3 = parseFloat(n3Input);
                    if (isNaN(n3)) {
                        console.log("Valor inválido");
                        rl.close();               
                    }

                    rl.question("Digite a nota 4: ", (n4Input) => {
                        let n4 = parseFloat(n4Input);
                        if (isNaN(n4)) {
                            console.log("Valor inválido");
                            rl.close();                   
                        }

                        let diferenca = (n1 * n2) - (n3 * n4);
                        console.log("A diferença dos produtos é:", diferenca);
                        rl.close();
                    });
                });
            });
        });
    } else {
        console.log("Erro: Opção inválida.");
        rl.close();
    }
});
