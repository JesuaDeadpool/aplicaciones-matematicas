const readline = require('readline');
const { promisify } = require('util');

async function factorial() {
    const rl = readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout
        }
    );

    const question = promisify(rl.question).bind(rl);
    const numeroPeticion = await question("Ingrese un numero : ");

    console.log(typeof numeroPeticion);
    console.log(numeroPeticion);
    rl.close();

}

factorial()
    .then(resultado => {
        console.log(resultado);

    }).catch(err => {
        console.log(`ocurrio un errro ${err}`)
    })