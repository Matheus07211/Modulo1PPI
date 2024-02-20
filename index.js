import  express  from 'express';
import process from 'process'; 
import path from 'path';

const host= '0.0.0.0'; // IP 0.0.0.0 representa todas as interfaces (placas de rede) do computador
const porta= 3000;     // Porta identifica um programa em execução no host hospedeiro

const app= express();

// O express oferece funcionalidades para permitir que conteúdos estáticos sejam fornecidos

app.use(express.static(path.join(process.cwd(), 'publico')));
app.use(express.static(path.join(process.cwd(), 'privado')));

/*
app.get('/', (pega, devolve) => { 
    devolve.write('<h1>Seja bem-vindo ao nosso site !</h1>');
    devolve.end();
}) // Arrow function

app.get('/index.html', (pega, devolve) => { 
    devolve.write('<h1>Esse eh o index html !</h1>');
    devolve.end();
}) // Arrow function
*/

app.listen(porta, host, ()=>{
    console.log(`Servidor escutando em http://${host}:${porta}`)
})
