const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    })
    
    afterAll(async ()=>{
       await connection.destroy();
    })
    
    it('should be able to create a new ONG',async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APAD757",
            email: "contato@apad.com.br",
            whatsapp: "0000000000",
            city: "Vila Velha",
            uf:"ES"
        })
        
       

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
    });
});