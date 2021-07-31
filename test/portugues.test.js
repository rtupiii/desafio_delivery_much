const { testeSchemaPt } = require('../src/schemas/testeSchema')
const DesafioTestePt = require('../src/service/desafioTestePt')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#TestePt', () => {
    const desafioTestePt = new DesafioTestePt()
    let response

    describe('Teste completo feliz', () => {

        beforeAll(async() => {
            response = await desafioTestePt.getById(10)
        })

        it('#status code', async() => {
            assert.equal(response.status, 200)
        })

        it('#contrato', async() => {
            assert.jsonSchema(response.body, testeSchemaPt)
        })

        it('#headers', async() => {
            assert.equal(response.header['content-type'], 'application/json')
        })

        it('#response body', async() => {
            assert.equal(response.body.extenso, 'dez')
        })

    })

    describe('Teste com valor fora do intervalo', () => {

        beforeAll(async() => {
            response = await desafioTestePt.getById(999999)
        })

        it('#status code', async() => {
            assert.equal(response.status, 400)
        })

        it('#contrato', async() => {
            assert.jsonSchema(response.body, testeSchemaPt)
        })

        it('#headers', async() => {
            assert.equal(response.header['content-type'], 'application/json')
        })

        it('#response body', async() => {
            assert.equal(response.body.extenso, 'Invalid data')
        })

    })

})