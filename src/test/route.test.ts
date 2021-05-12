import { createServer } from '../app/http/app'
import { Application } from 'express'
import request from 'supertest';

let app: Application;

//Avant toute chose, on attend la création de notre serveur
beforeAll(async () => {
    app = await createServer();
});

describe('GET /', () => {
    it('should return 200 & valid response with Hello world !', async (done) => {
        request(app)
            .get(`/api/v1/`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'Hello world !' });
                done();
            });
    });
});

describe('POST /user', () => {
    it('should return 200 & valid response with test !', async (done) => {
        request(app)
            .post(`/api/v1/user`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toMatchObject({ message: 'test !' });
                done();
            });
    });
});