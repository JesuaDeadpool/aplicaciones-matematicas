const readline = require('readline');
const { promisify } = require('util');

async function factorial() {
    let factorialN = 1;
    let numerPetiNum = 0;
    const rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );
    do {

        const question = promisify(rl.question).bind(rl);
        const numeroPeticion = await question("Ingrese un numero : ");
        numerPetiNum = Number(numeroPeticion);
        if (numerPetiNum < 0) {
            console.log("No se permiten numero negativos, vuelva a ingresar un número");
        }

    } while (numerPetiNum < 0);
    rl.close();

    if (numerPetiNum == 0) {
        return 1;
    } else {

        for (let i = 1; i <= numerPetiNum; i++) {
            factorialN *= i;
            console.log(`${factorialN} * ${i}`);
        }
    }

    return factorialN;
}

factorial()
    .then(resultado => {
        console.log(`Factorial: ${resultado}`);

    }).catch(err => {
        console.log(`ocurrio un errro ${err}`)
    })