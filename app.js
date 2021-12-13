const express = require('express');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

app.get('/test', (request, response) => {
    response.json({ mensaje: 'Endpoint de prueba' });
});

//cuerpo de petición de login viene JSON: { username: xxxxxxx, password: xxxxxxx }
app.post('/login', (request, response) => {
    const { username, password } = request.body;
    if (password !== "12345" || username !== "admin") {
        response.sendStatus(400);
        return;
    }

    response.json({ usuario: "admin", fecha: Date.now() });

});
//cuerpo de petición {a: 0, b: 0}
app.post('/suma', (request, response) => {
    const { a, b } = request.body;
    if (!isNaN(a) && !isNaN(b)) {
        response.json({ resultado: parseFloat(a) + parseFloat(b) });
        return;
    }
    response.sendStatus(400);
});

module.exports = app;