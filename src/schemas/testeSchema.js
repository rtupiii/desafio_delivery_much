const testeSchemaPt = {
    type: "object",
    required: ['extenso'],
    properties: {
        extenso: {
            type: "string"
        }
    }
}

const testeSchemaEn = {
    type: "object",
    required: ['full'],
    properties: {
        full: {
            type: "string"
        }
    }
}

module.exports = { testeSchemaEn, testeSchemaPt }