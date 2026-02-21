let usuario = {
  nome: 'João Carlos',
  senha: '1234',
  mostraNome: function() {
    console.log( this.nome );
  }
};

usuario.mostraNome();
