import  express  from "express";

const host= '0.0.0.0'; // IP 0.0.0.0 representa todas as interfaces (placas de rede) do computador
const porta= 3000;     // Porta identifica um programa em execução no host hospedeiro

const app= express();

app.get('/', (pega, devolve) => { 
    devolve.write('<h1>Seja bem-vindo ao nosso site !</h1>');
    devolve.end();
}) // Arrow function

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`)
})
