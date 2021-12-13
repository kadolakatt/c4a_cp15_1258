const request = require('supertest');
const app = require('./app');


describe('Pruebas componente practico 15.', () => {

    test('Prueba inicio de sesión con credenciales inválidas.', async() => {
        const response = await request(app).post("/login").send({
            username: "juancho",
            password: "sx1x4x4x4"
        });
        expect(response.statusCode).toBe(401);
    })

    test('Prueba inicio de sesion con credenciales válidas.', async() => {
        const response = await request(app).post('/login').send({
            username: "admin",
            password: "12345"
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ usuario: "admin" })
    });

    test('Prueba de suma correcta', async () => {
        const response = await request(app).post('/suma').send({
            a: 1,
            b: 2
        });
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ resultado: 3 });
    });

    test('Prueba suma errada', async () => {
        const response = await request(app).post('/suma').send({
            a: null,
            b: null
        });
        expect(response.statusCode).toBe(400);
        expect(response.body).toEqual({ error: "Los parámetros son obligatorios." });
    });


});