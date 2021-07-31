const env = require('../settings/config')
const request = require('supertest')(env.url)

class DesafioTesteEn {
    async getById(id) {
        const res = await request.get(`/en/${id}`)
        return res
    }
}

module.exports = DesafioTesteEn