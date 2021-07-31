const env = require('../settings/config')
const request = require('supertest')(env.url)

class DesafioTestePt {
    async getById(id) {
        const res = await request.get(`/${id}`)
        return res
    }
}

module.exports = DesafioTestePt