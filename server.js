const http = require('http');
const host = "localhost";
const PORT = 8080;

const requestHandler = (req, res) => {
    const url = new URL(req.url, `http://${host}:${PORT}`);

    if (url.pathname === '/saludo') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Saludando a los integrantes del grupo: Camila Peroni Franco, Fernando Zarama Pardo, Pedro Peroni Franco, Manuela Villamizar');

    } else if (url.pathname === '/formacion') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Ruta: /formacion\nHasta el momento hemos visto los temas: VSC, git, branching & merging, Introducción HTML y CSS, algoritmos y estructura de datos, JavaScript, NODE, funciones asincrónicas y servidores web ');

    } else if (url.pathname === '/task') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const tasks = [
            { id: 1, description: 'verificar ruta de vuelo', completed: true },
            { id: 1, description: 'peso, balance y combustible para el vuelo', pending: true },
            { id: 1, description: 'estado del clima en la ruta', completed: true },
            { id: 2, description: 'procedimiento de despegue', pending: true },
            { id: 2, description: 'encender motores para rodaje', pending: true },
            { id: 2, description: 'completar el checlist previo al despegue', pending: true },
            { id: 3, description: 'rodar hasta la pista 17 izquierda', pending: true }
        ];
        res.end(JSON.stringify(tasks));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Ruta no encontrada');
    }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://${host}:${PORT}`);
});





