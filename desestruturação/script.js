let pessoa = {
    nomeCompleto: 'José Couves',
    idade: 25,
    salario: 3500
};

let { nomeCompleto: nome, ...resto } = pessoa;
console.log(nome);
console.log(resto);