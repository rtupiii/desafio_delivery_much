const { testeSchemaEn } = require('../src/schemas/testeSchema')
const DesafioTesteEn = require('../src/service/desafioTesteEn')

const chai = require('chai')
const assert = chai.assert
chai.use(require('chai-json-schema'))

describe('#EnTest', () => {
    const desafioTesteEn = new DesafioTesteEn()
    let response

    describe('Full acceptance test', () => {

        beforeAll(async() => {
            response = await desafioTesteEn.getById(10)
        })

        it('#status code', async() => {
            assert.equal(response.status, 200)
        })

        it('#contract', async() => {
            assert.jsonSchema(response.body, testeSchemaEn)
        })

        it('#headers', async() => {
            assert.equal(response.header['content-type'], 'application/json')
        })

        it('#response body', async() => {
            assert.equal(response.body.full, 'ten')
        })

    })

    describe('Without range test', () => {

        beforeAll(async() => {
            response = await desafioTesteEn.getById(999999)
        })

        it('#status code', async() => {
            assert.equal(response.status, 400)
        })

        it('#contract', async() => {
            assert.jsonSchema(response.body, testeSchemaEn)
        })

        it('#headers', async() => {
            assert.equal(response.header['content-type'], 'application/json')
        })

        it('#response body', async() => {
            assert.equal(response.body.full, 'Invalid data')
        })

    })

})