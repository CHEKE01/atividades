const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite a nota 1: ", (n1Input) => {
    let n1 = parseFloat(n1Input);
    if (isNaN(n1)) {
        console.log("Valor inválido para a nota 1");
        rl.close();
        
    }

    rl.question("Digite a nota 2: ", (n2Input) => {
        let n2 = parseFloat(n2Input);5
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
                rl.close(); // Fecha o readline
            });
        });
    });
});
