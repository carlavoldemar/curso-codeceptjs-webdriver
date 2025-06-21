const { generate, validate } = require ('gerador-validador-cpf')

const cpfName = () => {
    var cpf = generate({format: true})
    var cpfAndName = cpf + ' - Carla Voldemar'
    return cpfAndName
    //console.log(cpf)
    //console.log(validate(cpf))
}

const soma = (num1, num2) => {
    var somatorio = num1 + num2
    return somatorio
}

exports.cpfName = cpfName
exports.soma = soma